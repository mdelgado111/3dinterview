from datetime import datetime

from flask import Flask, request
from flask_restful import Resource, Api
from flask_cors import CORS
from requests import get

from backend.validators.Schemas import StandardSchema
from backend.models.DataPoint import PredictionPoint

from backend.config import API_KEY, EXCLUDES, DB_SESSION


app = Flask(__name__)
api = Api(app)
CORS(app)


class StandardLatLon(Resource):
    def post(self):
        try:
            result = StandardSchema().load(request.json)
            latitude = float(request.json['latitude'])
            longitude = float(request.json['longitude'])
            get_string = 'https://api.openweathermap.org/data/3.0/onecall?lat={}&lon={}&exclude={}&appid={}'.format(
                latitude,
                longitude,
                EXCLUDES,
                API_KEY
            )
            response = get(get_string)
            session = DB_SESSION()
            PredictionPoint.create_prediction_point(datetime.now(), response.json()).save(session)
            return response.json(), 200
        except Exception as err:
            return {}, 500

api.add_resource(StandardLatLon, '/')
