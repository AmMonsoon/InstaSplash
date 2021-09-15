from app.models import db, Comment
from datetime import datetime
from faker import Faker

faker = Faker()

def seed_comments():
    first_comment = Comment(userId=3, imageId=1, commentBody="Wow that is a really cute dog", created_at=datetime.now())

    db.session.add(first_comment)


    for i in range(200):
        comment = Comment(userId=faker.random_int(min=1, max=53), imageId=faker.random_int(min=1, max=60), commentBody=faker.sentence(), created_at=datetime.now())
        db.session.add(comment)
    db.session.commit()

def undo_comments():

    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()
