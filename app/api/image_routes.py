from flask import Blueprint, jsonify
from app.models import Image, Follower, User
from sqlalchemy import orm
import json
from flask_login import current_user

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
            print(image)
            payload.append(image.to_dict())
    
    lit = dict(enumerate(payload))
    print("helloooo", list(lit.values()))
    return lit
    
@image_routes.route('/<int:id>')
def image(id):
    image = Image.query.options(orm.joinedload('poster')).get(id)
    # image = Image.query.join(User).filter(Image.id == id).first()
    print('*********************', image.poster.username)
    return image.to_dict()

