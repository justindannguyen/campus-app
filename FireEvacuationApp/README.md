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
+ [react-native-charts-wrapper](https://github.com/wuxudong/react-native-charts-wrapper) For the charts

### Development
+ [redux-logger](https://github.com/evgenyrodionov/redux-logger) Redux middleware to log all state changes.
+ [flow-bin](https://github.com/facebook/flow) Static typechecker for JavaScript

## Common Problems
Close your package bundler server when got following message.
```
* What went wrong:
Execution failed for task ':app:processDebugResources'.
> java.io.IOException: Could not delete path 
```
***
Because we added debug, release buildTypes which are differenciate by ```applicationIdSuffix``` so application will not be launched automatically when running ```react-native run-android```.
Following error will occured at the end of build.
```
BUILD SUCCESSFUL
...
Error type 3
Error: Activity class {com.fireevacuation/com.fireevacuation.MainActivity} does not exist.
```
Run with ```--appIdSuffix``` parameter will fix the issue.
```
react-native run-android --appIdSuffix debug
```
***
We are using ```react-native-charts-wrapper``` and the latest release is not compatible with react native 0.50.+, so below errors will occurs:
```
undefined is not an object (evaluating '_react.PropTypes.bool')
unknown
AxisIface.js:5:21
```
Manual upgrade local folders to [this fork](https://github.com/solium/react-native-charts-wrapper)
Also update the ```react-native-charts-wrapper/android/build.gradle``` to target react-native version e.g. 0.50.3
```
compile "com.facebook.react:react-native:0.50.+"
```