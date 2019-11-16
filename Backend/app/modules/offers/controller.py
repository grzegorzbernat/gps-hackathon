
from app.core import db
from app.core.logger import Logger
from app.core.decorator import exceptions


# from app.core.db import DB__
# DB__()


class OfferController(object):
    def __init__(self):
        self.logger = Logger(__name__).get_looger()
        self.logger.debug(f'<class {__name__}>')


    # @exceptions(self.logger, '') ## Add response in @exception
    def get(self, id=None):
        try:
            self.logger.info(f'get(id={id})')
            if id:
                return db.get_offer(id)
            return db.get_all_offers()
        except Exception as err:
            self.logger.exception(err)
            return err


    # @exceptions(self.logger, '') ## Add response in @exception
    def create(self, data):
        try:
            self.logger.info(f'create(data=...)')
            return db.add_offer(data)
        except Exception as err:
            self.logger.exception(err)
            return err