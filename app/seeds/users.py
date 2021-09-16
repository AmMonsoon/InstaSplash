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
    for i in range(50):
        user = User(username = faker.simple_profile()['username'], profilePic='https://source.unsplash.com/random', email = faker.simple_profile()['mail'],password = faker.password(),firstName = faker.first_name(),lastName = faker.last_name())
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
