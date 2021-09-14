from app.models import db, Image
from datetime import datetime

def seed_images():
    puppy_image = Image(
        userId=2, imageUrl="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
        caption="What a cute puppy", profilePic=False, created_at=datetime.now()
    )
    apples = Image(
        userId=1, imageUrl="https://images.unsplash.com/photo-1631347532114-bb57aef55997?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80",
        caption="Eat healthy", profilePic=False, created_at=datetime.now()
    )
    bird_plant = Image(
        userId=3, imageUrl="https://images.unsplash.com/photo-1631214953530-0ae0277ccf7f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        caption="Is it a bird or a plant?!", profilePic=False, created_at=datetime.now()
    )

    db.session.add(puppy_image)
    db.session.add(apples)
    db.session.add(bird_plant)
    db.session.commit()

def undo_images():

    db.session.execute('TRUNCATE images RESTART IDENTITY CASCADE;')
    db.session.commit()
