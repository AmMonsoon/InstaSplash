from flask import Blueprint, jsonify
from app.models import Image, Follower, User
from sqlalchemy import orm
import json
image_routes = Blueprint('images', __name__)

# /following
# /explore  

@image_routes.route('/following')
def following(id):
    print('from following-backend')

@image_routes.route('/<int:id>')
def image(id):
    image = Image.query.options(orm.joinedload('poster')).get(id)
    # image = Image.query.join(User).filter(Image.id == id).first()
    print('*********************', image.poster.username)
    return image.to_dict()