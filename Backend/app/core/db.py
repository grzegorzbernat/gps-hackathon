import pymongo
from bson.objectid import ObjectId


from app.core.logger import Logger
from app.core.decorator import exceptions


logger = Logger(__name__).get_looger()



class Singleton(type):
    def __init__(cls, name, bases, attrs, **kwargs):
        super().__init__(name, bases, attrs)
        cls._instance = None

    def __call__(cls, *args, **kwargs):
        if cls._instance is None:
            cls._instance = super().__call__(*args, **kwargs)
        return cls._instance


class MONOGO_DB(metaclass=Singleton):
    def __init__(self):
        try:
            # ...
            self.MONGODB_URL = 'mongodb://127.0.0.1:27017/'
            logger.debug('<class {}>'.format(__name__))

            # ...
            self.mongo = pymongo.MongoClient(self.MONGODB_URL, connect=False)
        except Exception as err:
            logger.exception('__init__()  ==>  {err}.'.format(err=err))


    @exceptions(logger, 'get_db()')
    def get_db(self, name):
        return self.mongo.get_database(name)


    def get_collection(self, db, name):
        return self.get_db(db).get_collection(name)


    def get_self(self):
        return self.mongo


    def get_user_db(self):
        return self.get_collection('hackathon', 'users')



    @exceptions(logger, 'NO USERS')
    def get_all_users(self):
        return list(self.get_user_db().find({}))


    @exceptions(logger, 'NO USER FOUND')
    def get_user(self, _id):
        return self.get_user_db().find_one({'_id': ObjectId(_id)})


    @exceptions(logger, 'USER NOT ADDED')
    def add_user(self, data):
        logger.info('add_user(data=...)')
        del data['_id']

        self.get_user_db().insert_one(data)
        return 'USER ADDED'


    @exceptions(logger, 'USER NOT UPDATED')
    def update_user(self, _id, data):
        logger.info(f'update_user(_id={_id}, data=...)')
        del data['_id']

        self.get_user_db().update_one({'_id': ObjectId(_id)}, { "$set": data })
        return 'USER UPDATED'


    @exceptions(logger, 'USER NOT DELETED')
    def delete_user(self, _id):
        logger.info(f'delete_user(_id={_id})')

        self.get_user_db().delete_one({'_id': ObjectId(_id)})
        return 'USER DELETED'






DB_OFFER = [
    {
        'id': '32f2bhj',
        'title': 'offer 1',
        'description': 'description',
        'created': '10/10/2010',
        'edited': '11/10/2010',
    }
]



@exceptions(logger, 'get_all_offers(...)', [])
def get_all_offers():
    logger.info('get_all_offers()')
    return DB_OFFER


@exceptions(logger, 'get_offer(...)', {})
def get_offer(id):
    logger.info('get_offer()')
    return [offer for offer in DB_OFFER if offer['id'] == id][0]


@exceptions(logger, 'OFFER NOT ADDED')
def add_offer(data):
    logger.info('add_offer(data=...)')
    DB_OFFER.append(data)
    return 'OFFER ADDED'
