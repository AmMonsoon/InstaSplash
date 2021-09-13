from .db import db

class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    imageId = db.Column(db.Integer, db.ForeignKey('images.id'), nullable=False)
    commentBody = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime(timezone=True), nullable=False)
    updated_at = db.Column(db.DateTime(timezone=True))

    commenter = db.relationship("User", back_populates="comment")
    image = db.relationship("Image", back_populates="comment")
