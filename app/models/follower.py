from .db import db

class Follower(db.Model):
    __tablename__ = 'followers'

    id = db.Column(db.Integer, primary_key=True)
    follower = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    followed = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    rel_follower = db.relationship("User", foreign_keys="Follower.follower", back_populates="user_follower" )
    rel_followed = db.relationship("User", foreign_keys="Follower.followed", back_populates="being_followed")

    def to_dict(self): 
        return {
            "followerId": self.follower,
            "followedId": self.followed
        }
