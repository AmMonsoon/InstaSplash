from flask import Blueprint, jsonify
from app.models import Image

image_routes = Blueprint('images', __name__)



@image_routes.route('/<int:id>')
def image(id):
    image = Image.query.get(id)
    return image.to_dict()