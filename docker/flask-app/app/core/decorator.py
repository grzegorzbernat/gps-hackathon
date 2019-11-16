import functools
import logging
import json



def logge(logger, api):
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            logger.info('--------------------------------------------------------------------------------------------')
            if kwargs :
                logger.info(f'{func.__name__}({ [f"{k}={v}" for k, v in kwargs.items()] })')
            else:
                logger.info(f'{func.__name__}()')  

            if (api.payload):
                logger.info(f'>> REQUEST BODY : {api.payload}')

            return func(*args, **kwargs)
        return wrapper
    return decorator    


def exceptions(logger, error_message, response=None):
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            try:
                return func(*args, **kwargs)
            except Exception as err:
                logger.exception(err)
                if not response:
                    return response
                return error_message
        return wrapper
    return decorator

