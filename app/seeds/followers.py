from app.models import db, Follower

def seed_followers():
    first_follow = Follower(follower=3, followed=2)

    db.session.add(first_follow)
    db.session.commit()

def undo_followers():

    db.session.execute('TRUNCATE followers RESTART IDENTITY CASCADE;')
    db.session.commit()
