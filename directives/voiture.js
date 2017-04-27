var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope){
   $scope.voitures = [
    {"marque":"Renault", "couleur":"verte"},
		{"marque":"Citroen", "couleur":"grise"},
		{"marque":"Opel", "couleur":"or"},
		{"marque":"Ferrari", "couleur":"rouge"},
		{"marque":"Peugeot", "couleur":"bleu"},
		{"marque":"Nissan", "couleur":"verte"}
];
$scope.test="mon test";

});
