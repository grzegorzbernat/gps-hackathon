import json
from app.core.logger import Logger



logger = Logger(__name__).get_looger()



def json_dump(data):
    try:
        return json.dumps(data, indent=4)
    except Exception as err:
        logger.exception(err)
        return {}