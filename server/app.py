import os
from flask import Flask, request, jsonify, send_from_directory
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS, cross_origin
app = Flask(__name__, static_url_path='', static_folder='static',)
cors = CORS(app)
app.config.from_object(os.environ['APP_SETTINGS'])
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.url_map.strict_slashes = False
db = SQLAlchemy(app)
from models import *

@app.route('/')
def root():
    return app.send_static_file('index.html')

@app.route("/textSamples",methods=['GET'])
def get_all():
    try:
        texts=TextSample.query.order_by(TextSample.id).all()
        return  jsonify([e.serialize() for e in texts])
    except Exception as e:
	    return(str(e))

@app.route("/textSamples/<id_>",methods=['GET'])
def get_by_id(id_):
    try:
        text=TextSample.query.filter_by(id=id_).first()
        return jsonify(text.serialize())
    except Exception as e:
	    return(str(e))

@app.route("/textSamples",methods=['POST'])
def add_text_sample():
    type=request.json.get("type")
    text=request.json.get("text")
    try:
        textSample=TextSample(
            type,
            text
        )
        db.session.add(textSample)
        db.session.commit()
        return "Textsample added. text id={}".format(textSample.id), 204
    except Exception as e:
        return(str(e))


@app.route("/textSamples/<id_>",methods=['PATCH'])
def patch_result(id_):
    text=TextSample.query.filter_by(id=id_).first()
    result=request.json.get("result")
    print (result)
    text.saveResult(result)
    db.session.commit()
    return '', 204

if __name__ == '__main__':
    app.run()