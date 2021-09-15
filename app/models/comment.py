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

    def comment_to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'imageId': self.imageId,
            'commentBody': self.commentBody,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
