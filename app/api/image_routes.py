from flask import Blueprint, request
from app.models import Image, Follower, db
from sqlalchemy import orm
from flask_login import current_user
from datetime import datetime

image_routes = Blueprint('images', __name__)


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
    # image = Image.query.join(User).filter(Image.id == id).first()
    # image = Image.query.get(id)
    return image.to_dict_inc_user()

@image_routes.route('/add', methods=["POST"])
def addImage():
    data = request.json
    image = Image(
        userId=current_user.id,
        caption=data['caption'],
        imageUrl=data['imageUrl'],
        profilePic=data['profilePic'],
        created_at=datetime.now()

    )
    db.session.add(image)
    db.session.commit()
    payload = {'image': image.to_dict()}
    return payload
