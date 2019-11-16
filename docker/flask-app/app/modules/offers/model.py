
from flask_restplus import fields

def factor_model(api):
    return api.model('Offer', {
        'id': fields.String(readOnly=True, description='Offer unique identifier'),
        'title': fields.String(required=True, description='Offer title'),
        'description': fields.String(required=True, description='Offer description'),
        'public': fields.Boolean(required=True, description='Offer is public'),
        'created': fields.Date(required=True, description='Offer created'),
        'edited': fields.Date(required=True, description='Offer edited'),
    })