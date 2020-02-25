# task-manager-app

## link task-manager api:
https://trieubui-task-manager-api.herokuapp.com/

## Request list:

### Create user
post -> api_url/users
json body with {name, email, password}

### Create task
post -> api_url/tasks
json body with {description, completed} (completed optional with default = false)
with Bearer Token

### Login user
post -> api_url/users/login
json body with {email, password}

### Read profile
get -> api_url/users/me
with Bearer Token

### Read Tasks
get -> api_url/tasks
with query ?(completed, sortBy)
with Bearer Token

### Read Task
get -> api_url/tasks/task_id
with Bearer Token

### Update User
patch -> api_url/users/me
json body with {name, email, password} (optional)
with Bearer Token

### Update Task
patch -> api_url/task/task_Id
json body with {description, completed} (optional)
with Bearer Token

### Delete User
delete -> api_url/users/me
with Bearer Token

### Delete Task
delete -> api_url/tasks/task_id
with Bearer Token

### Logout User
post -> api_url/users/logout
with Bearer Token

### Logout All Users
post -> api_url/users/logoutAll
with Bearer Token

### Update Avatar
post -> api_url/users/me/avatar
jpg/jepg/png smaller than 1MB
with Bearer Token

### Get Avatar
get -> api_url/users/user_id/avatar

### delete Avatar
delete -> api_url/users/me/avatar
with Bearer Token