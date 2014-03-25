angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})
.controller('FriendsCtrl', function($scope) {
  $scope.friends = [
    {name: 'Scruff McGruff', id: 1},
    {name: 'Tom Collins', id: 2}
  ];
})
.controller('AccountCtrl', function($scope) {
});
