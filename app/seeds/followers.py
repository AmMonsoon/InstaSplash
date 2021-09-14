from app.models import db, Follower

def seed_followers():
    first_follow = Follower(follower=3, followed=2)
    second = Follower(follower=2, followed=1)
    third = Follower(follower=1, followed=3)

    db.session.add(first_follow)
    db.session.add(second)
    db.session.add(third)
    db.session.commit()

def undo_followers():

    db.session.execute('TRUNCATE followers RESTART IDENTITY CASCADE;')
    db.session.commit()
