from app.models import db, Like
from faker import Faker

faker = Faker()

def seed_likes():
    first_like = Like(userId=3, imageId=1) 
    db.session.add(first_like)

    for i in range(2000):
        like = Like(userId=faker.random_int(min=1, max=53), imageId= faker.random_int(min=1, max=1000))
        db.session.add(like)
        
    db.session.commit()

def undo_likes():

    db.session.execute('TRUNCATE likes RESTART IDENTITY CASCADE;')
    db.session.commit()
