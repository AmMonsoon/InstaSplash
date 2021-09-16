from app.models import db, Follower
from faker import Faker

faker = Faker()

def seed_followers():
    first_follow = Follower(follower=3, followed=2)
    second = Follower(follower=2, followed=1)
    third = Follower(follower=1, followed=3)

    db.session.add(first_follow)
    db.session.add(second)
    db.session.add(third)

    for i in range(150):
        follower = faker.random_int(min=1, max=53)
        followed = faker.random_int(min=1, max=53)
        while follower == followed:
            follower = faker.random_int(min=1, max=53)
            followed = faker.random_int(min=1, max=53)
        follow = Follower(follower=follower, followed=followed)
        db.session.add(follow)

    randomUsers = [22,40,51,18,13]
    for randomUser in randomUsers:
        follow2 = Follower(follower=1, followed = randomUser)
        db.session.add(follow2)
    db.session.commit()

def undo_followers():

    db.session.execute('TRUNCATE followers RESTART IDENTITY CASCADE;')
    db.session.commit()
