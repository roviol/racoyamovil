angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});


})

.controller('PlaylistsCtrl', ['$scope', '$http',
  function ($scope, $http)  {
  $http.get('http://www.racoya.com/blog/wp-json/wp/v2/posts').success(function(data) {
    $scope.playlists = data;
    console.log("pasa");
  });
  /*
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];*/
}])

.controller('PlaylistCtrl', ['$scope', '$stateParams', '$http', 
  function($scope, $stateParams, $http) {
    $scope.playlistid=$stateParams.playlistId;

    $http.get('http://www.racoya.com/blog/wp-json/wp/v2/posts/'+$scope.playlistid).success(function(data) {
      $scope.playlista = data;
      $scope.playtitulo = data.title.rendered;
      console.log("pasa3");
    });
}])

.controller('BrowserCtrl',  ['$scope', '$http',
  function ($scope,$http)  {
     $http.get('js/unidades.json').success(function(data) {
        $scope.unidades = data;
        $scope.unisel = $scope.unidades[0];
        $scope.uniseldest = $scope.unidades[1];
     });    
     $http.get('js/densidades.json').success(function(data) {
        $scope.densidades = data;
        $scope.densel = $scope.densidades[0];
     });    
     $http.get('js/equivalencias.json').success(function(data) {
        $scope.equivalencias = data;
     });    
     $scope.resultado = 0;
     $scope.cantidad = 1;
     console.log("pasa4a");

     $scope.update = function() {
         $scope.resultado = $scope.cantidad * $scope.densel.densidad;
         factor=$scope.equivalencias[$scope.unisel.id][$scope.uniseldest.id];
         console.log($scope.unisel.id);
         console.log($scope.uniseldest.id);
         console.log(factor);
     }
}]);
 
