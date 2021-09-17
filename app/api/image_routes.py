from flask import Blueprint, request
from app.models import Image, Follower, db, Like, User, Comment
from sqlalchemy import orm, desc
from flask_login import current_user
from datetime import datetime
import random


image_routes = Blueprint('images', __name__)


@image_routes.route('/following')
def following():
    following = Follower.query.filter(Follower.follower == current_user.id).all()
    payload = []
    for element in following:
        images = Image.query.filter(Image.userId == element.followed)
        for image in images:

            likes = Like.query.filter(Like.imageId == image.id).all()
            payload2 = {}
            for like in likes:
                payload2[like.userId] = like.to_dict()
            image.likes = payload2

            comments = Comment.query.filter(Comment.imageId == image.id).all()
            commentPayload = {}
            for comment in comments:
                commentUser = User.query.filter(User.id == comment.userId).first()
                comment.user = commentUser.to_dict()
                commentPayload[comment.id] = comment.comment_to_dict_inc_user()

            image.comments = commentPayload
            payload.append(image.to_dict_inc_user_likes_comments())
    lit = dict(enumerate(payload))
    return lit

@image_routes.route('/explore')
def explore():
    following = Follower.query.filter(Follower.follower == current_user.id).all()
    followedUsers = [follow.followed for follow in following]
    notFollowing = User.query.filter(User.id.not_in(followedUsers)).all()
    
    random.shuffle(notFollowing)
    notFollowingLimit = [notFollowing[i] for i in range(5)]
    payload = []
    for element in notFollowingLimit:
        images = Image.query.filter(Image.userId == element.id)
        for image in images:

            likes = Like.query.filter(Like.imageId == image.id).all()
            payload2 = {}
            for like in likes:
                payload2[like.userId] = like.to_dict()
            image.likes = payload2

            comments = Comment.query.filter(Comment.imageId == image.id).all()
            commentPayload = {}
            for comment in comments:
                commentPayload[comment.id] = comment.comment_to_dict()

            image.comments = commentPayload
            payload.append(image.to_dict_inc_user_likes_comments())
    
    lit = dict(enumerate(payload))
    return lit

@image_routes.route('/<int:id>')
def image(id):
    image = Image.query.options(orm.joinedload('poster')).get(id)
    likes = Like.query.filter(Like.imageId == id).all()
    payload = {}
    for like in likes:
        payload[like.userId] = like.to_dict()
    image.likes = payload

    comments = Comment.query.filter(Comment.imageId == id).all()
    commentPayload = {}
    for comment in comments:
        commentUser = User.query.filter(User.id == comment.userId).first()
        comment.user = commentUser.to_dict()
        commentPayload[comment.id] = comment.comment_to_dict_inc_user()
    image.comments = commentPayload


    return image.to_dict_inc_user_likes_comments()

@image_routes.route('/<int:id>' , methods=['PATCH'])
def update_caption(id):
    newcaption = request.json['caption']
    image = Image.query.options(orm.joinedload('poster')).get(id)
    image.caption = newcaption
    db.session.add(image)
    db.session.commit()

    likes = Like.query.filter(Like.imageId == image.id).all()
    payload2 = {}
    for like in likes:
        payload2[like.userId] = like.to_dict()
    image.likes = payload2
    
    comments = Comment.query.filter(Comment.imageId == id).all()
    commentPayload = {}
    for comment in comments:
        commentUser = User.query.filter(User.id == comment.userId).first()
        comment.user = commentUser.to_dict()
        commentPayload[comment.id] = comment.comment_to_dict_inc_user()
    image.comments = commentPayload

    return image.to_dict_inc_user_likes_comments()

@image_routes.route('/add', methods=["POST"])
def addImage():
    data = request.json
    image = Image(
        userId=current_user.id,
        caption=data['caption'],
        imageUrl=data['imageUrl'],
        # profilePic=data['profilePic'],
        created_at=datetime.now()

    )
    db.session.add(image)
    db.session.commit()
    payload = image.to_dict()
    return payload

@image_routes.route('/<int:id>' , methods=['DELETE'])
def delete_image(id):
    image = Image.query.get(id)
    db.session.delete(image)
    db.session.commit()
    return "BIG SUCCESS"

@image_routes.route('/<int:id>/like')
def add_like(id):
    existingLike = Like.query.filter(Like.userId == current_user.id, Like.imageId == id).first()
    if not existingLike:
        like = Like(userId = current_user.id, imageId = id)
        db.session.add(like)
        db.session.commit()
    return "BIG SUCCESS"

@image_routes.route('/<int:id>/unlike')
def remove_like(id):
    like = Like.query.filter(Like.userId == current_user.id, Like.imageId == id).all()
    if len(like):
        for eachlike in like:
            db.session.delete(eachlike)
            db.session.commit()
    return "BIG SUCCESS"


@image_routes.route('/<int:id>/comments')
def get_comments(id):
    comments = Comment.query.filter(Comment.imageId == id).all()
    commentPayload = {}
    for comment in comments:
        commentUser = User.query.filter(User.id == comment.userId).first()
        comment.user = commentUser.to_dict()
        commentPayload[comment.id] = comment.comment_to_dict_inc_user()
    return commentPayload

@image_routes.route('/<int:id>/comments/add', methods=['POST'])
def add_comment(id):
    data = request.json
    comment = Comment(
        userId=current_user.id,
        imageId=id,
        commentBody=data['commentBody'],
        created_at=datetime.now()
    )
    if comment:
        db.session.add(comment)
        db.session.commit()
    commentUser = User.query.filter(User.id == comment.userId).first()
    comment.user = commentUser.to_dict()
    payload = comment.comment_to_dict_inc_user()
    return payload


@image_routes.route('/<int:id>/comments/<int:commentId>', methods=['PATCH'])
def edit_comment(id, commentId):
    commentToEdit = Comment.query.get(commentId)
    edittedComment = request.json['commentBody']
    commentToEdit.commentBody = edittedComment
    db.session.add(commentToEdit)
    db.session.commit()
    commentUser = User.query.filter(User.id == commentToEdit.userId).first()
    commentToEdit.user = commentUser.to_dict()
    return commentToEdit.comment_to_dict_inc_user()


    # Get imageid from params, query comment table using that image id and display all of the comments for that image id, with order of most recent on top(sorted by created_at)
    # /images/5/comments/add
    # /images/5/comments/id/delete
    # /images/5/comments/id -- can use current_user to verify and allow edit button
@image_routes.route('/<int:id>/comments/<int:commentId>', methods=['DELETE'])
def delete_comment(id, commentId):
    commentToDelete = Comment.query.get(commentId)
    db.session.delete(commentToDelete)
    db.session.commit()
    return "YES, DELETED"
