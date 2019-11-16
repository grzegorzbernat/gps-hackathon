
from flask_restplus import Resource, fields, Namespace


from app.modules.locations.model import factor_model
from app.modules.locations.controller import LocationController
from app.core.decorator import exceptions, logge
from app.core.logger import Logger


api = Namespace('locations', description='Location operations')
controller = LocationController()
logger = Logger(__name__).get_looger()



@api.route('/')
class LocationList(Resource):
    '''Shows a list of all locations'''
    @logge(logger, api)
    @api.doc('locations_list')
    @api.marshal_list_with(factor_model(api))
    def get(self):
        '''List all locations'''
        return controller.get()


    @logge(logger, api)
    @api.doc('locationcreate')
    @api.expect(factor_model(api))
    @api.marshal_with(factor_model(api), code=201)
    def post(self):
        '''Create a new location'''
        return controller.create(api.payload), 201


# api.abort(404, "Location {} doesn't exist".format(id))


@api.route('/<string:id>')
@api.response(404, 'Location not found')
@api.param('id', 'The location identifier')
class Location(Resource):
    @logge(logger, api)
    @api.doc('locationby_id')
    @api.marshal_with(factor_model(api))
    def get(self, id):
        '''Get location by id'''
        return controller.get(id)


    @logge(logger, api)
    @api.doc('locationdelete')
    @api.response(204, 'Location deleted')
    def delete(self, id):
        '''Delete a location given its identifier'''
        return controller.delete(id), 204


    @logge(logger, api)
    @api.expect(factor_model(api))
    @api.marshal_with(factor_model(api))
    def put(self, id):
        '''Update a location given its identifier'''
        return controller.update(id, api.payload)



@api.route('/category/<string:category>')
@api.response(404, 'Location not found')
@api.param('category', 'The location category')
class LocationByCategory(Resource):
    @logge(logger, api)
    @api.doc('locationby_category')
    @api.marshal_with(factor_model(api))
    def get(self, category):
        '''Get location by category'''
        return controller.get_by_category(category)
