
from flask_restplus import Resource, fields, Namespace


from app.modules.users.model import factor_model
from app.modules.users.controller import UserController
from app.core.decorator import exceptions, logge
from app.core.logger import Logger


api = Namespace('users', description='User operations')
controller = UserController()
logger = Logger(__name__).get_looger()



@api.route('/')
class UserList(Resource):
    '''Shows a list of all users'''
    @logge(logger, api)
    @api.doc('users_list')
    @api.marshal_list_with(factor_model(api))
    def get(self):
        '''List all users'''
        return controller.get()


    @logge(logger, api)
    @api.doc('user_create')
    @api.expect(factor_model(api))
    @api.marshal_with(factor_model(api), code=201)
    def post(self):
        '''Create a new user'''
        return controller.create(api.payload), 201


# api.abort(404, "User {} doesn't exist".format(id))


@api.route('/<string:id>')
@api.response(404, 'User not found')
@api.param('id', 'The user identifier')
class User(Resource):
    @logge(logger, api)
    @api.doc('user_by_id')
    @api.marshal_with(factor_model(api))
    def get(self, id):
        '''Get user by id'''
        return controller.get(id)


    @logge(logger, api)
    @api.doc('user_delete')
    @api.response(204, 'User deleted')
    def delete(self, id):
        '''Delete a user given its identifier'''
        return controller.delete(id), 204


    @logge(logger, api)
    @api.expect(factor_model(api))
    @api.marshal_with(factor_model(api))
    def put(self, id):
        '''Update a user given its identifier'''
        return controller.update(id, api.payload)
