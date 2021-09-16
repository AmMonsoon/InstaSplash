from app.models import db, User
from faker import Faker

faker = Faker()

# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', profilePic='https://source.unsplash.com/random', email='demo@aa.io', password='password', firstName="Demo", lastName="User")
    marnie = User(
        username='marnie', profilePic='https://source.unsplash.com/random', email='marnie@aa.io', password='password', firstName="Marnarious", lastName="Marn")
    bobbie = User(
        username='bobbie', profilePic='https://source.unsplash.com/random', email='bobbie@aa.io', password='password', firstName="James", lastName="Chipson")

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)

    randomArr = [
  "https://images.unsplash.com/photo-1631160214841-92d2b6ce25f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3NA&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1629349997103-aeefaf30f2cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3NA&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1631339287639-e0af96360ce6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3NA&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1631481784927-da978de9ddb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3NA&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1630370448234-abcd569512f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3NA&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1631168709859-6300e28409ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3NA&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1630396427043-c0fe3fb0d228?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3NA&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1605702098590-d552a98dc93d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3NA&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1629203432180-71e9b18d855c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3NA&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1631544114506-c252206abbc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3NA&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1631160214841-92d2b6ce25f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3NQ&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1629349997103-aeefaf30f2cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3NQ&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1631339287639-e0af96360ce6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3NQ&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1631481784927-da978de9ddb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3NQ&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1630370448234-abcd569512f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3NQ&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1631168709859-6300e28409ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3NQ&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1630396427043-c0fe3fb0d228?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3NQ&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1605702098590-d552a98dc93d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3NQ&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1629203432180-71e9b18d855c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3NQ&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1631544114506-c252206abbc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3NQ&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1625865020197-7611b58dd933?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3NQ&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1631281456187-8a27f8565956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3NQ&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1631036703066-503cefb8f196?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3NQ&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1629740081315-ecbc2619ad6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3NQ&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1629546174885-7ce9a5ab4190?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3Ng&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1630495933949-b1cccdc625ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3Ng&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1629206896310-68433de7ded1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3Ng&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1631430411956-44b72ddb0ee0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3Ng&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1622798471684-f5e15aa1d910?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3Ng&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1631000115129-649a6f283653?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3Ng&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1630509866812-062871bbc065?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3Ng&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1629902040617-f58a5a15797c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3Ng&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1630590451346-e40066ef3daf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3Ng&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1630361102412-bd7ed8710307?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3Ng&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1630651394339-b6522d8e4cab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3Nw&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1630495933949-b1cccdc625ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3Nw&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1629206896310-68433de7ded1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3Nw&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1631430411956-44b72ddb0ee0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3Nw&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1622798471684-f5e15aa1d910?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3Nw&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1631000115129-649a6f283653?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3Nw&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1629316464107-ec2702d7e10c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3Nw&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1629902040617-f58a5a15797c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3Nw&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1630590451346-e40066ef3daf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3Nw&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1630361102412-bd7ed8710307?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3Nw&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1630651394339-b6522d8e4cab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3Nw&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1630511954446-5f09bfda4499?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3Nw&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1629190483076-14acfdf3869f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3Nw&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1588458491623-2b68ff782292?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3Nw&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1631478243896-81711d9356ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3OA&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1630231521735-f5d8eccf490f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTgyMjg3OA&ixlib=rb-1.2.1&q=80&w=1080"
]
    for i in range(50):
        user = User(username = faker.simple_profile()['username'], profilePic=randomArr[i], email = faker.simple_profile()['mail'],password = faker.password(),firstName = faker.first_name(),lastName = faker.last_name())
        db.session.add(user)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
