# Fire Evacuation Application

## About

React native application, for fire evacuation. To improve the user experience, application uses few
animation when UI is updated or navigate between view. FPS is > 59 which is high responsive and
smooth.

Latest work using mock data, video is available at: [Youtube](https://youtu.be/42iWQbJCStc)

![](docs/summary.jpeg "Summary view") ![](docs/summary_expand.jpeg "Expand of summary view")
![](docs/setting.jpeg "Setting") ![](docs/detail.jpeg "Detail")

## Libraries Stack

### Production

Beside `react` and `react-native` libraries as default, below are additional ones & their purposes

* [Native Base Component](https://nativebase.io/) Provide cross platform UI components.
* [Spinkit](https://github.com/maxs15/react-native-spinkit) For the cool spin components.
* [SVG Icons](https://github.com/oblador/react-native-vector-icons) Beside icons from `native-base`,
  `react-native-vector-icons` provide much more options.
* [react-native-linear-gradient](https://github.com/react-native-community/react-native-linear-gradient)
  For making gradient background of setting screen.
* [react-native-animatable](https://github.com/oblador/react-native-animatable) Making basic
  annimation for profile picture
* [react-native-router-flux](https://github.com/aksonov/react-native-router-flux) Provide the
  navigation platform between screens, history stack.
  * [reactnavigation](https://reactnavigation.org/) Maybe the other alternative good candidates from
    react native community.
* [Redux](https://redux.js.org/): Typical state container (predictable storages) for react
  application.
  * [Redux Thunk](https://github.com/gaearon/redux-thunk) Adding async execution or side effects for
    redux, running as as middleware.
    * [Redux Saga](https://github.com/redux-saga/redux-saga) other good alternatives to add side
      effects, low readability but testability.
    * [Redux observable](https://github.com/redux-observable/redux-observable) Other good
      alternative to add side effects, recommended for Rx fan.
  * [Redux Binding](https://github.com/reactjs/react-redux) to provide global states, actions
    (dispatch) to react component as state.
* [Redux state update](https://github.com/kolodny/immutability-helper) Helper to provide mutability
  of states (predictable)
* [react-native-charts-wrapper](https://github.com/wuxudong/react-native-charts-wrapper) For the
  charts
* [react-native-document-picker](https://github.com/Elyx0/react-native-document-picker) for pickup
  the attendance file from local SD card (fire explorer)

### Development

* [redux-logger](https://github.com/evgenyrodionov/redux-logger) Redux middleware to log all state
  changes.
* [flow-bin](https://github.com/facebook/flow) Static typechecker for JavaScript

## Common Problems

Close your package bundler server when got following message.

```
* What went wrong:
Execution failed for task ':app:processDebugResources'.
> java.io.IOException: Could not delete path
```

---

Because we added debug, release buildTypes which are differenciate by `applicationIdSuffix` so
application will not be launched automatically when running `react-native run-android`. Following
error will occured at the end of build.

```
BUILD SUCCESSFUL
...
Error type 3
Error: Activity class {com.fireevacuation/com.fireevacuation.MainActivity} does not exist.
```

Run with `--appIdSuffix` parameter will fix the issue.

```
react-native run-android --appIdSuffix debug
```

---

We are using `react-native-charts-wrapper` with customization, Manual upgrade local folders to
[this fork](https://github.com/justindannguyen/react-native-charts-wrapper) Also update the
`react-native-charts-wrapper/android/build.gradle` to target react-native version e.g. 0.50.3

```
compile "com.facebook.react:react-native:0.50.+"
```

---

Issue when using PieChart with ScrollView

```
Fatal Exception: java.lang.NullPointerException: Attempt to invoke virtual method 'java.lang.Object java.lang.ref.WeakReference.get()' on a null object reference at com.github.mikephil.charting.renderer.PieChartRenderer.drawExtras(PieChartRenderer.java:638)
```

This [PR](https://github.com/PhilJay/MPAndroidChart/pull/3603) will resolve problem

## Licenses

The MIT License

Copyright (c) 2017 Justin Nguyen

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
associated documentation files (the "Software"), to deal in the Software without restriction,
including without limitation the rights to use, copy, modify, merge, publish, distribute,
sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

1. Redistributions of source code must retain the above copyright notice, this list of conditions
   and the following disclaimer.
2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions
   and the following disclaimer in the documentation and/or other materials provided with the
   distribution.

The above copyright notice and this permission notice shall be included in all copies or substantial
portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT
NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES
OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
