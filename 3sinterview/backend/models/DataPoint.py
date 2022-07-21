from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy import ForeignKey
from sqlalchemy import Column, DateTime, JSON

from backend.config import DATABASE

Base = declarative_base()
engine = create_engine(DATABASE, echo=True)


class PredictionPoint(Base):
    __tablename__ = 'prediction_points'

    query_time = Column(DateTime, primary_key=True)
    query_data = Column(JSON)

    @staticmethod
    def create_prediction_point(query_time, query_data):
        temp = PredictionPoint()
        temp.query_time = query_time
        temp.query_data = query_data
        return temp

    def save(self, session):
        try:
            session.add(self)
            session.commit()
        except:
            session.rollback()
            raise Exception('DB Original Contour Error')


Base.metadata.create_all(engine)
