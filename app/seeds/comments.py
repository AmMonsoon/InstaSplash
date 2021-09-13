from app.models import db, Comment
from datetime import datetime

def seed_comments():
    first_comment = Comment(userId=3, imageId=1, commentBody="Wow that is a really cute dog", created_at=datetime.now())

    db.session.add(first_comment)
    db.session.commit()

def undo_comments():

    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()
