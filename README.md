# Installing Redux Dependencies

## npm install redux react-redux

## Confirm the installation in package.json

# redux - folder

## reducers - folder

### firstReducer.js, secondReducer.js

### reducers.js

## store.js

# Provider -> index.js

# useSelector -> App.js to get data from store

# actions - folder

## action-creators - folder

### actions.js

## consts - refactor componenets that use action strings with action object

# useDispatch -> App.js

# bindActionCreators -> App.js

# thunk / applyMiddleware -> store.js

## npm install redux-thunk - this is to use dispatch function in actions.js as asychronus

# Configure Redux Dev Tools

## npm install redux-devtools-extension

## store.js -> composeWithDevTools
