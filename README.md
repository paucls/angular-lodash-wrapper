# angular-lodash-wrapper
This is simple module for wrapping the utility library Lo-dash (http://lodash.com/) in an Angular service.

## Installing
Install via bower

```bower install angular-lodash-wrapper```

Require it into your application (after Angular)

```<script src="angular-lodash-wrapper.js"></script>```

Add the module as a dependency to your app

```js
angular.module('myApp', ['angularLodashWrapper']);
```

## Usage

Inject it as a dependency in your Controller or Service and it is ready to use.

```js
angular.module('app').
  controller('myCtrl', function($scope, _) {
    ...
    _.find(...);
    ...
});
```