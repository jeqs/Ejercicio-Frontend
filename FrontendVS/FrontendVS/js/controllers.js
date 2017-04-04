// Description: Netactica- Ejercicio FrontEnd
// Author: José Quispe

angular.module('app.controllers', ['rzModule', 'ui.bootstrap'])
    .controller('frontendController', ['$scope',
	function ($scope) {

	    // Data
	    var hotels = [
			{
			    "name": "Hotel Emperador",
			    "stars": 3,
			    "price": 1596,
			    "location": "Madrid",
			},
	        {
	            "name": "Petit Palace San Bernardo",
	            "stars": 4,
	            "price": 145,
	            "location": "San Bernardo",
	        },
	        {
	            "name": "Hotel Nuevo Boston",
	            "stars": 2,
	            "price": 861,
	            "location": "Boston",
	        }
	    ];

	    $scope.hotels = hotels;

	    // Slider
	    $scope.slider = {
	        minValue: 100,
	        maxValue: 2000,
	        options: {
	            floor: 0,
	            ceil: 2000,
	            step: 1,
	            id: 'slider-id',
	            min: 'slider-minValue',
	            max: 'slider-maxValue',
	            onChange: function (id, min, max) {
	                var results = [];
	                for (var i = 0; i < hotels.length; i++) {
	                    if (hotels[i].price >= min && hotels[i].price <= max) {
	                        results.push(hotels[i]);
	                    }
	                }
	                $scope.hotels = results;
	            }
	        }
	    };

	    // Return array n length
	    $scope.rating = function (n) {
	        return new Array(n);
	    };

	    // Get Hotel List
	    $scope.getHotelListByLocation = function (_inputLocation) {
	        if (_inputLocation == undefined || _inputLocation == "") {
	            $scope.hotels = hotels;
	        }
	        else {
	            var results = [];
	            for (var i = 0; i < hotels.length; i++) {
	                if (hotels[i].location.toLowerCase() == _inputLocation.toLowerCase()) {
	                    results.push(hotels[i]);
	                }
	            }
	            $scope.hotels = results;
	        }
	        return true;
	    };

	    $scope.getHotelListByStars = function (_inputStars) {
	        if (_inputStars == undefined) {
	            $scope.hotels = hotels;
	        }
	        else {
	            var results = [];
	            for (var i = 0; i < hotels.length; i++) {
	                if (hotels[i].stars == _inputStars) {
	                    results.push(hotels[i]);
	                }
	            }
	            $scope.hotels = results;
	        }
	        return true;
	    };

	    // Datepicker
	    $scope.checkin = new Date();
	    $scope.checkout = new Date();

	}]);
