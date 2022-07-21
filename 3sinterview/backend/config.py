from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker


ENV = 'test'

if ENV == 'test':
    DATABASE = 'postgresql://postgres:postgres@127.0.0.1/threeshipstest'
    API_KEY = 'API_KEY'
    EXCLUDES = 'current,minutely,hourly,alerts'
else:
    DATABASE = 'postgresql://postgres:postgres@127.0.0.1/threeshipsprod'
    API_KEY = 'API_KEY'
    EXCLUDES = 'current,minutely,hourly,alerts'

Base = declarative_base()
engine = create_engine(DATABASE, echo=True, client_encoding='utf8')
DB_SESSION = sessionmaker(bind=engine)
DB_SESSION.configure(bind=engine)
