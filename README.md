# CodeNail
A code snippet sharing platform

## Environment setup
### pull docker image
```
docker pull zllai/csci3100env
```
### Run container
in project directory:
```
./run_container.sh
```
### Install node dependencies
In container:
```
npm i
```
Only need to do it once, or after you change package.json.

### Complile frontend
```
npm run build
```

Do it every time you modify the frontend code, otherwise no effect.

### Run the server
```
npm run start
```
Then you can test REST API and frontend on your host machine.

## Current implemented REST API
### Root
```
/api
```

### User sign up
```
/api/user/sign_up
```
invoke example (use linux curl command):
```
curl -d '{"name":"test", "password":"123456782"}' -H 'Content-Type: application/json' localhost:3030/api/user/sign_up
```
related code:
* backend/entities/user/api.js
* backend/entities/user/controller.js
* backend/entities/user/model.js

### User login
```
/api/user/login
```

invoke example (use linux curl command):
```
curl -d '{"name":"test", "password":"12345678"}' -H 'Content-Type: application/json' localhost:3030/api/user/login
```
related code:
* backend/entities/user/api.js
* backend/entities/user/controller.js
* backend/entities/user/model.js

### New post
```
api/post/newPost
```

invoke example (use linux curl command):
```
curl -d '{"title":"helloworld","keywords":"testing", "description":"print helloworld","specification":"nothing to say","code":"print helloworld;","user_name":"test","date":"2019-3-23"}' -H 'Content-Type: application/json' localhost:3030/api/post/newPost
```
related code:
* backend/entities/post/api.js
* backend/entities/post/controller.js
* backend/entities/post/model.js

### List user's post
```
/api/user/posts
```

invoke example (use linux curl command):
```
curl -X GET 'localhost:3030/api/user/posts?user=test'
```
related code:
* backend/entities/post/api.js
* backend/entities/post/controller.js
* backend/entities/post/model.js

### Add Comment
```
api/comment/newComment
```

invoke example (use linux curl command):
```
curl -d '{"content":"A good post!","toPost":"5ca862840cd18f030d6596d2","user_name":"test","date":"2019-4-10"}' -H 'Content-Type: application/json' localhost:3030/api/comment/newComment
```
related code:
* backend/entities/comment/api.js
* backend/entities/comment/controller.js
* backend/entities/comment/model.js

P.S.: "toPost" and "toComment" attribute means this comment is the comment of a post or a comment. Only one of them will have value.

### List user's comment
```
/api/user/comments
```

invoke example (use linux curl command):
```
curl -X GET 'localhost:3030/api/user/comments?user=test'
```
related code:
* backend/entities/comment/api.js
* backend/entities/comment/controller.js
* backend/entities/comment/model.js

### Search snippet

```
/api/user/searchPost
```

invoke example (use linux curl command):
```
curl -d '{"content":"world"}' -H 'Content-Type: application/json' localhost:3030/api/post/searchPost
```
related code:
* backend/entities/post/api.js
* backend/entities/post/controller.js
* backend/entities/post/model.js

## Current implemented Frontend
### Header bar
display logo and user menu (display login / sign up if no authenticated user).

related code:
* frontend/Containers/Header/*
* frontend/Components/Header/*

### Sign Up page
url:
```
localhost:3030/sign_up
```

related code:
* frontend/Views/SignUp/*

### Edit/Create snippet page
url:
```
localhost:3030/edit_snippet
```

related code:
* frontend/View/EditSnippet/*

### User Profile
url:
```
localhost:3030/user_profile/:username
```

related code:
* frontend/View/UserProfile/*

### Login
Implemented as a submenu of Header bar, toggle when clicking "login" in header bar.

related code:
* frontend/App/api.js (login api)
* frontend/App/reducers.js (handle login state change)
* frontend/App/constants.js (login related action type constants)
* frontend/App/actions.js (login action)
* frontend/Components/Header/UserMenu/* (user menu UI)

note:
Current implementation is not secure. Security can be ensured by adding JWT.


## Sublime text plugin
### Installation
copy plugin/CodeNail to your sublime text package directory. The path depends on the sublime version and OS.

In my case:
```
cp -r plugin/CodeNail ~/.config/sublime-text-2/Packages
```

### Add sublime text keybinding
In sublime-text, click preference -> key bindings-user

Add following lines to the pop up editor:
```
[
	{"keys": ["ctrl+shift+s"], "command": "code_nail" }
]

```

### Usage
* Start CoidNail server
* Add some snippets in the frontend
* Open sublime-text
* Press ctrl+shift+s, you will see a search bar at the bottom

## Backend todo-list
- [x] User sign up
- [x] User Login 
- [x] Search for snippet
- [x] List User posts
- [x] Post New snippet

## Frontend todo-list
- [X] Home page
- [X] User sign up
- [X] User Login 
- [X] Search for snippet
- [X] List User posts
- [X] Post New snippet
- [X] View snippet
- [X] Header bar
