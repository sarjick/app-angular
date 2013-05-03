'use strict';

/*
	Global namespace initialisation, route definitions & minimal localisation setup
*/
var np = np || {};

np.locale = 'en-us';

np.returnLocalisedPath = function( path ) {
	return 'partials/' + np.locale + path;
};

np.app = angular.module('np.app', ['np.app.filters', 'np.app.services', 'np.app.directives', 'ui'])
	.config([ '$httpProvider', '$routeProvider', function( $httpProvider, $routeProvider ) {
	$routeProvider
		.when('/', {templateUrl: np.returnLocalisedPath( '/main.html' ), controller: 'MainCtrl'})
		.otherwise({templateUrl: np.returnLocalisedPath( '/main.html' ), controller: 'MainCtrl'});
}] );

angular.module('np.app.directives', ['np.app.services']);
angular.module('np.app.filters', []);
angular.module('np.app.services', ['ngResource']);
