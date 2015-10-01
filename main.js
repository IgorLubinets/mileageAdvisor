//define our first controller
var mileageApp = angular.module("mileageApp", []);

mileageApp.controller("mileageCtrl", function ($scope) {
	$scope.intervals = intervals;
});


// define mileage intervals model (5000mi for now)
// later will be moved out into a server or at least a separate .json file :)
var intervals = {
	interval: "5000",
	items: [	{	action: "Inspect ball joints and dust covers", done: false },
				{	action: "Inspect drive shaft boots (4WD)", done: false },
				{	action: "Inspect engine air filter", done: false },
				{	action: "Inspect steering linkage and boots", done: false },
				{	action: "Lubricate propeller shaft", done: false },
				{	action: "Re-torque propeller shaft bolt", done: false },
				{	action: "Tighten nuts and bolts on chassis and body", done: false } ]
};

