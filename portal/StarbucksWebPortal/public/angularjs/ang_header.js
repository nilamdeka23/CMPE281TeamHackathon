angular.module('starbucks').controller('headerCtrl', [ '$rootScope', '$scope', '$http', '$state', function($rootScope, $scope, $http, $state) {

	$scope.onStoreClick = function ( store_name ) {

		console.log ("Updating the store location ") ;
		$rootScope.store_location = store_name ;
		console.log("Changing the state") ;
		$state.go('order');
	}

} ]);
