
from flask_restplus import fields

def factor_model(api):
    return api.model('User', {
        '_id': fields.String(readOnly=True, description='User unique identifier'),
        'name': fields.String(required=True, description='User name'),
        'email': fields.String(required=True, description='User eamil'),
        'password': fields.String(required=True, description='User password'),
    })