from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import User, Follower, db

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    followers = Follower.query.filter(Follower.followed == id).all()
    payload = {}
    for follower in followers:
        payload[follower.follower] = follower.to_dict()
    user.followers = payload
    return user.to_dict_inc_followers()

@user_routes.route('/<int:id>/follow')
def follow(id):
    existingFollow = Follower.query.filter(Follower.follower == current_user.id, Follower.followed == id).first()
    if not existingFollow:
        follow = Follower(follower = current_user.id, followed = id)
        db.session.add(follow)
        db.session.commit()
    return "return"

@user_routes.route('/<int:id>/unfollow')
def unfollow(id):
    follow = Follower.query.filter(Follower.follower == current_user.id, Follower.followed == id).all()
    if len(follow):
        for eachfollow in follow:
            db.session.delete(eachfollow)
            db.session.commit()
    return "return"

@user_routes.route('/<int:id>', methods=["PATCH"])
def update_profilePic(id):
    newProfilePic = request.json['imageURL']
    user = User.query.get(id)
    user.profilePic = newProfilePic
    db.session.add(user)
    db.session.commit()
    return "BIG SUCCESS"


