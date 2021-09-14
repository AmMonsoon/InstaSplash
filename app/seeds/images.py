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
    rocks = Image(
        userId=3, imageUrl="https://images.unsplash.com/photo-1631624729083-c64035648cfb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
        caption="It's just some rocks, ya nerd", profilePic=False, created_at=datetime.now()
    )
    flam = Image(
        userId=3, imageUrl="https://images.unsplash.com/photo-1631603106607-4f3c1f647b76?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
        caption="Def birds", profilePic=False, created_at=datetime.now()
    )
    homer = Image(
        userId=3, imageUrl="https://images.unsplash.com/photo-1610384467831-4b1e0cd08336?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
        caption="My best Homer-bush gif impression", profilePic=False, created_at=datetime.now()
    )
    rear = Image(
        userId=3, imageUrl="https://images.unsplash.com/photo-1631521753137-c08c538b58b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
        caption="The best rear end", profilePic=False, created_at=datetime.now()
    )


    db.session.add(puppy_image)
    db.session.add(apples)
    db.session.add(bird_plant)
    db.session.add(rocks)
    db.session.add(flam)
    db.session.add(homer)
    db.session.add(rear)
    db.session.commit()

def undo_images():

    db.session.execute('TRUNCATE images RESTART IDENTITY CASCADE;')
    db.session.commit()
