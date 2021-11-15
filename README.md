# InstaSplash
InstaSplash is way for user to splash into a creative environment of users posting all types of creative/unique images.
Users can sign up and express thoughts/interests on images by commenting or liking an image.
The Instasplash live link can be found here: <a href='https://instasplash-live.herokuapp.com/'>InstaSplash</a> !!!

## Technologies
* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://img.shields.io/badge/-JavaScript-F7DF1E?logo=JavaScript&logoColor=333333" /></a>
* <a href="https://www.python.org/psf/"><img src="	https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" /></a>
* <a href="https://www.postgresql.org/"><img src="https://img.shields.io/badge/-PostgreSQL-336791?logo=PostgreSQL" /></a>
* <a href="https://reactjs.org/"><img src="https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB"></a>
* <a href="https://redux.js.org/"><img src="https://img.shields.io/badge/redux-%23593d88.svg?style=flat&logo=redux&logoColor=white"></a>
* <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="https://img.shields.io/badge/-CSS3-1572B6?logo=CSS3" /></a>
* <a href="https://flask.palletsprojects.com/en/2.0.x/"><img src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white" /></a>
## Features 

### Sign-up
![Sign Up](react-app/src/images/signup.png)

### Login
![Login](react-app/src/images/login.png)

### User Profile
![Profile](react-app/src/images/profile.png)

### Edit Profile
![EditProfile](react-app/src/images/editProfilePic.png)

### Following
![Following](react-app/src/images/following.png)

### Comments
![Comments](react-app/src/images/comment.png)

### Post an Image
![Post](react-app/src/images/postImage.png)

## Installation
To build/run project locally, please follow these steps:

1. Clone this repository
```javascript
git clone https://github.com/AmMonsoon/Week20GroupProject.git
 ```

2. Install dependencies for `/app` and `/react-app`
for `/app`
```bash
pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
```

for `/react-app`
```javascript
npm install
```


3. In the root directory create a `.env` based on `.env.example` with proper settings 
4. Setup your PostgresSQL user , password , database
5. Enable your virtual environment 
```python
pipenv shell
```

6. In your virtual environment, run your migrations and seeds 
```python
flask db upgrade
flask seed all
```

7. To start your backend make sure your in your virtual environment or run the command
```python 
pipenv run flask run
```



