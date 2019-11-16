
from app.core import db
from app.core.db import MONOGO_DB
from app.core.logger import Logger
from app.core import utils
from app.core.decorator import exceptions


logger = Logger(__name__).get_looger()


class LocationController(object):
    
    
    def __init__(self):
        logger.debug(f'<class {__name__}>')
        self.mongo_db = MONOGO_DB()


    @exceptions(logger, 'get(_id=...)')
    def get(self, _id=None):
        logger.info(f'get(_id={_id})')
        if _id:
            return self.mongo_db.get_locations_by_id(_id)
        return self.mongo_db.get_all_locations()


    @exceptions(logger, 'get_by_category(category=...)')
    def get_by_category(self, category=None):
        logger.info(f'get_by_category(category={category})')
        return self.mongo_db.get_locations_by_category(category)


    @exceptions(logger, 'create(data=...)')
    def create(self, data):
        logger.info('create(data={data})'.format(data=utils.json_dump(data)))
        return self.mongo_db.add_location(data)


    @exceptions(logger, 'update(_id=..., data=...)')
    def update(self, _id, data):
        logger.info('update(_id={_id}, data={data})'.format(_id=_id, data=utils.json_dump(data)))
        return self.mongo_db.update_location(_id, data)


    @exceptions(logger, 'delete(_id=...)')
    def delete(self, _id):
        logger.info('delete(_id={_id})'.format(_id=_id))
        return self.mongo_db.delete_location(_id)


    @exceptions(logger, 'vote(data=...)')
    def vote(self, _id, data):
        logger.info('vote(_id={_id}, data={data})'.format(data=utils.json_dump(data), _id=_id))
        return self.mongo_db.vote_location(_id, data)
