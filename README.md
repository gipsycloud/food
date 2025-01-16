# food
#### user
-- User Register
http://localhost:3000/api/v1/auth/register

-- User Login
http://localhost:3000/api/v1/auth/login

-- reset password || post method
http://localhost:3000/api/v1/user/resetPassword

-- update password || post method
http://localhost:3000/api/v1/user/updatePassword

-- delete user account || delete method
http://localhost:3000/api/v1/user/deleteUser/id

-- get user account || get method
http://localhost:3000/api/v1/user/users

-- update user || put method
http://localhost:3000/api/v1/user/update

#### restaurant
-- get all restaurant || get method
http://localhost:3000/api/v1/restaurant/getall

-- get restaurant || get method
http://localhost:3000/api/v1/restaurant/create

-- post restaurant || post method
http://localhost:3000/api/v1/restaurant/get/id

-- delete restaurant || delete method
http://localhost:3000/api/v1/restaurant/delete/id

#### category
-- category get all || get method
http://localhost:3000/api/v1/category/getall

-- create category || create method
http://localhost:3000/api/v1/category/create

-- update category || update method
http://localhost:3000/api/v1/category/update

-- delete category || delete method
http://localhost:3000/api/v1/category/delete


### food
-- create food || post method
http://localhost:3000/api/v1/food/create

-- get all food || get method
http://localhost:3000/api/v1/food/getall

-- get food by id || get method
http://localhost:3000/api/v1/food/get/:id

-- update food || update method
http://localhost:3000/api/v1/food/update/:id

### order
-- order by food
http://localhost:3000/api/v1/food/placeorder           
