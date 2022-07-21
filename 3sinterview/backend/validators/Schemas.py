from marshmallow import Schema, fields


class StandardSchema(Schema):
    latitude = fields.Decimal()
    longitude = fields.Decimal()

