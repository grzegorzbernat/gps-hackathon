
from flask_restplus import fields

def factor_model(api):
    return api.model('Location', {
        '_id': fields.String(readOnly=True, description='Location unique identifier'),
        'type': fields.String(required=False, description='Location type'),

        # ...
        'properties': fields.Nested(
            api.model('address', {
                'KOD_POCZTO': fields.String(attribute='KOD_POCZTO'),
                'NAZWA': fields.String(attribute='NAZWA'),
                'NR_BUDYNKU': fields.String(attribute='NR_BUDYNKU'),
                'ULICA': fields.String(attribute='ULICA')
            }),
            # required=True,
            description='Location properties'
        ),

        # ...
        'geometry': fields.Nested(
            api.model('info', {
                'type': fields.String(attribute='type'),
                'coordinates': fields.List(fields.Float, attribute='coordinates'),
            }),
            # required=True,
            description='Location geometry'
        ),

        'supported': fields.List(fields.String, description='Location supported'),

        # ...
        'votes': fields.List(
            fields.Nested(
                api.model('sample', {
                    '0': fields.Integer(attribute='0'),
                    '1': fields.Integer(attribute='1'),
                    '2': fields.Integer(attribute='2'),
                    '3': fields.Integer(attribute='3'),
                    '4': fields.Integer(attribute='4'),
                    '5': fields.Integer(attribute='5'),
                    'supported_for': fields.String(attribute='supported_for'),
                }),
                # required=True,
                description='Location votes'
            ),
            attribute='votes'
        )
    })

