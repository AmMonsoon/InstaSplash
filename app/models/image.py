from .db import db
import json
class Image(db.Model):
    __tablename__ = 'images'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    imageUrl = db.Column(db.TEXT ,nullable=False)
    caption = db.Column(db.TEXT, nullable=False)
    profilePic = db.Column(db.BOOLEAN)
    created_at = db.Column(db.DateTime(timezone=True), nullable=False)
    updated_at = db.Column(db.DateTime(timezone=True))
    
    poster = db.relationship("User", back_populates="image")
    comment = db.relationship("Comment", cascade="all,delete", back_populates="image")
    like = db.relationship("Like", cascade="all,delete", back_populates="image")


    def to_dict(self):
            return {
                'id': self.id,
                'userId': self.userId ,
                'caption': self.caption,
                'imageUrl': self.imageUrl,
                'profilePic': self.profilePic,
                'created_at': self.created_at,
                'updated_at': self.updated_at,
            }

    def to_dict_inc_user(self):
            return {
                'id': self.id,
                'userId': self.userId ,
                'caption': self.caption,
                'imageUrl': self.imageUrl,
                'profilePic': self.profilePic,
                'created_at': self.created_at,
                'updated_at': self.updated_at,
                'poster': self.poster.to_dict()
            }
