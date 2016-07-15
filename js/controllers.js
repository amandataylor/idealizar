angular.module('teste',[])

.controller('AddUserController',function ($scope) {
	$scope.message = '';
	$scope.addUser = function () {
		// TODO for the reader: actually save user to database...
		$scope.message = 'Obrigado, ' + $scope.user.first + ', você foi adicionado com sucesso!';
		location.href="dados.html";
	}	
}); 