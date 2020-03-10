from app import db
from sqlalchemy.dialects.postgresql import JSON


class TextSample(db.Model):
    __tablename__ = 'textSamples'

    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String())
    text = db.Column(db.String())
    result = db.Column(JSON)


    def saveResult(self, result):
        self.result = result

    def __init__(self, type, text):
        self.type = type
        self.text = text

    def __repr__(self):
        return '<id {}>'.format(self.id)

    def serialize(self):
        return {
            'id': self.id, 
            'type': self.type,
            'text': self.text,
            'result':self.result
        }