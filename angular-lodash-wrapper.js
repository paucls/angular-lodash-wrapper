'use strict';

// Wrapper for Lo-dash or Underscore allowing us to inject it anywhere.
angular.module('angularLodashWrapper', []).factory('_', ['$window', function ($window) {
    // assumes underscore has already been loaded on the page
    return $window._;
}]);
