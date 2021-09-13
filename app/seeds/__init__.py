from flask.cli import AppGroup
from .users import seed_users, undo_users
from .images import seed_images, undo_images
from .followers import seed_followers, undo_followers
from .comments import seed_comments, undo_comments
from .likes import seed_likes, undo_likes

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_images()
    seed_followers()
    seed_comments()
    seed_likes()



# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_images()
    undo_followers()
    undo_comments()
    undo_likes()
