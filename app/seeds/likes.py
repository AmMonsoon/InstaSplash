from app.models import db, Like

def seed_likes():
    first_like = Like(userId=3, imageId=1) 

    db.session.add(first_like)
    db.session.commit()

def undo_likes():

    db.session.execute('TRUNCATE likes RESTART IDENTITY CASCADE;')
    db.session.commit()
