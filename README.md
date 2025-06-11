# food

#### user

### online api calls

-- User Register
/api/v1/auth/register

-- User Login
/api/v1/auth/login

-- reset password || post method
/api/v1/user/resetPassword

-- update password || post method
/api/v1/user/updatePassword

-- delete user account || delete method
/api/v1/user/deleteUser/id

-- get user account || get method
/api/v1/user/users

-- update user || put method
/api/v1/user/update

#### restaurant

-- get all restaurant || get method
/api/v1/restaurant/getall

-- get restaurant || get method
/api/v1/restaurant/create

-- post restaurant || post method
/api/v1/restaurant/get/id

-- delete restaurant || delete method
/api/v1/restaurant/delete/id

#### category

-- category get all || get method
/api/v1/category/getall

-- create category || create method
/api/v1/category/create

-- update category || update method
/api/v1/category/update

-- delete category || delete method
/api/v1/category/delete

### food

-- create food || post method
/api/v1/food/create

-- get all food || get method
/api/v1/food/getall

-- get food by id || get method
/api/v1/food/get/:id

-- update food || update method
/api/v1/food/update/:id

### order

-- order by food
/api/v1/food/placeorder

-- order status update method from authorize user
/api/v1/food/orderstatus/:id
