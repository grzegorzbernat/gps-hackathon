
from flask_restplus import Resource, Namespace


from app.modules.offers.model import factor_model
from app.modules.offers.controller import OfferController
from app.core.decorator import exceptions, logge
from app.core.logger import Logger


api = Namespace('offers', description='Offers operations')
controller = OfferController()
logger = Logger(__name__).get_looger()



@api.route('/')
class OfferList(Resource):
    '''Shows a list of all offers'''
    @logge(logger, api)
    @api.doc('offers_list')
    @api.marshal_list_with(factor_model(api))
    def get(self):
        '''List all offers'''
        return controller.get()


    @logge(logger, api)
    @api.doc('offer_create')
    @api.expect(factor_model(api))
    @api.marshal_with(factor_model(api), code=201)
    def post(self):
        '''Create a new offer'''
        return controller.create(api.payload), 201



@api.route('/<string:id>')
@api.response(404, 'Offer not found')
@api.param('id', 'The offer identifier')
class Offer(Resource):
    @logge(logger, api)
    @api.doc('offer_by_id')
    @api.marshal_with(factor_model(api))
    def get(self, id):
        '''Get offer by id'''
        return controller.get(id)