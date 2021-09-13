from app.models import db, Image
from datetime import datetime

def seed_images():
    puppy_image = Image(
        userId=2, imageUrl="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80", 
        caption="What a cute puppy", profilePic=False, created_at=datetime.now()
    )

    db.session.add(puppy_image)
    db.session.commit()

def undo_images():

    db.session.execute('TRUNCATE images RESTART IDENTITY CASCADE;')
    db.session.commit()
