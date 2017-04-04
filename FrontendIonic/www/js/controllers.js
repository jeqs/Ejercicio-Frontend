
angular.module('app.controllers', [])
  
.controller('pageCtrl', ['$scope', '$stateParams', 
	function ($scope, $stateParams) {

		var hotels = [ 
			{
	            "name" : "Hotel Emperador",
	            "stars" : "3",
	            "price" : "1596",
	        },
	        {
	            "name" : "Petit Palace San Bernardo",
	            "stars" : "4",
	            "price" : "2145",
	        },
	        {
	            "name" : "Hotel Nuevo Boston",
	            "stars" : "2",
	            "price" : "861",
	        }
		];

		$scope.list = hotels;

		$scope.getHotelList = function(){
			$scope.list = hotels;
			console.log($scope.list);
		}
	
	}
])
