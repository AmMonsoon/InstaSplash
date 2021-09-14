from flask import Blueprint, jsonify, request
from app.models import Image, Follower, User
from sqlalchemy import orm
import json
from flask_login import current_user
from app.models import db


image_routes = Blueprint('images', __name__)

# /following
# /explore  

@image_routes.route('/following')
def following():
    user = current_user
    following = Follower.query.filter(Follower.follower == current_user.id).all()
    payload = []
    for element in following:
        images = Image.query.filter(Image.userId == element.followed)
        for image in images:
            payload.append(image.to_dict())
    
    lit = dict(enumerate(payload))
    return lit
    
@image_routes.route('/<int:id>')
def image(id):
    image = Image.query.options(orm.joinedload('poster')).get(id)
    return image.to_dict_inc_user()

@image_routes.route('/<int:id>' , methods=['PATCH'])
def update_caption(id):
    newcaption = request.json['caption']
    image = Image.query.options(orm.joinedload('poster')).get(id)
    image.caption = newcaption
    db.session.add(image)
    db.session.commit()
    return image.to_dict_inc_user()
    
