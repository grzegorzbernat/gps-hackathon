
from app.core import db
from app.core.db import MONOGO_DB
from app.core.logger import Logger



class UserController(object):
    
    
    def __init__(self):
        self.logger = Logger(__name__).get_looger()
        self.logger.debug(f'<class {__name__}>')
        self.mongo_db = MONOGO_DB()

    def get(self, _id=None):
        try:
            self.logger.info(f'get(_id={_id})')
            if _id:
                # return db.get_user(_id)
                return self.mongo_db.get_user(_id)
            return self.mongo_db.get_all_users()
        except Exception as err:
            self.logger.exception(err)
            return err


    def create(self, data):
        try:
            print('.........................................')
            print('>> create')
            print(data)
            print('.........................................')
            
            return db.add_user(data)
        except Exception as err:
            # app.logger.error('create()  ==>  {err}.'.format(err=err))
            print('create()  ==>  {err}.'.format(err=err))
            return err


    def update(self, id, data):
        try:
            print('.........................................')
            print('>> update')
            print(id)
            print(data)
            print('.........................................')
            
            return db.update_user(id, data)
        except Exception as err:
            # app.logger.error('update()  ==>  {err}.'.format(err=err))
            print('update()  ==>  {err}.'.format(err=err))
            return err


    def delete(self, id):
        try:
            print('.........................................')
            print('>> delete')
            print(id)
            print('.........................................')
            
            return db.delete_user(id)
        except Exception as err:
            # app.logger.error('delete()  ==>  {err}.'.format(err=err))
            print('delete()  ==>  {err}.'.format(err=err))
            return err
