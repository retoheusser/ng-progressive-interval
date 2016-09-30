# ng-progressive-interval
Angular interval service which doubles the delay with every iteration

## Installation
`bower install ng-progressive-interval --save`

## Example
You can use it similarly like angular's built-in `$interval` service. Inject it as dependency and pass a function to it.

```js
angular.module("myApp", ["retoheusser.ng-progressive-interval"])
.controller("myAppCtrl", function (progressiveInterval) {
  progressiveInterval(function () {
    // this gets executed after 1s, then after 2s, then 4s, then 8s and so on...
  }, 1000);
});
```

## API
```js
var cancelInterval = progressiveInterval(fn, initialDelay, maxDelay, maxIterations)
```

- Parameters:
  - `fn`: Function to execute
  - `initialDelay`: Delay in ms, increases by factor 2 in every iteration
  - `maxDelay`: If initialDelay exceeds maxDelay, use this value instead. It remains constant.
  - `maxIterations`: `fn` will not be executed more than this value. Inifite iterations if undefined or 0.
- Returns:
  - `function`: a callable function without parameters to cancel the interval.
