from flask import Blueprint, jsonify
from app.models import Image, Follower, User

image_routes = Blueprint('images', __name__)

# /following
# /explore  

@image_routes.route('/following')
def following(id):
    print('from following-backend')

@image_routes.route('/<int:id>')
def image(id):
    image = Image.query.get(id)
    return image.to_dict()