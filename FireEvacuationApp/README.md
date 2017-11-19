# Fire Evacuation Application
## About
React native application, for fire evacuation.

## Libraries Stack
### Production
Beside  ```react``` and ```react-native``` libraries as default, below are additional ones & their purposes
+ [Native Base Component](https://nativebase.io/) Provide cross platform UI components.
+ [Spinkit](https://github.com/maxs15/react-native-spinkit) For the cool spin components.
+ [SVG Icons](https://github.com/oblador/react-native-vector-icons) Beside icons from ```native-base```, ```react-native-vector-icons``` provide much more options.
+ [react-native-router-flux](https://github.com/aksonov/react-native-router-flux) Provide the navigation platform between screens,  history stack.
  + [reactnavigation](https://reactnavigation.org/) Maybe the other alternative good candidates from react native community.
+ [Redux](https://redux.js.org/): Typical state container (predictable storages) for react application.
  + [Redux Thunk](https://github.com/gaearon/redux-thunk) Adding async execution or side effects for redux, running as as middleware. 
    + [Redux Saga](https://github.com/redux-saga/redux-saga) other good alternatives to add side effects, low readability but testability.
    + [Redux observable](https://github.com/redux-observable/redux-observable) Other good alternative to add side effects, recommended for Rx fan.
  + [Redux Binding](https://github.com/reactjs/react-redux) to provide global states, actions (dispatch) to react component as state. 
+ [Redux state update](https://github.com/kolodny/immutability-helper) Helper to provide mutability of states (predictable)

### Development
+ [redux-logger](https://github.com/evgenyrodionov/redux-logger) Redux middleware to log all state changes.
+ [flow-bin](https://github.com/facebook/flow) Static typechecker for JavaScript