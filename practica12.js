var app=angular.module("app",["ngResource"]);

app.controller("control12",function($scope,listado, listado2){
	$scope.boton=false;

	$scope.datos=listado.get();
	$scope.datos2=listado2.get();
	
	$scope.BuscarAlumno=function(){
		var ced=$scope.cedula;
		$scope.boton=false;
		for (var i = 0; i < $scope.datos2.length; i++) {
			if(angular.equals(ced, $scope.datos2[i].cedula)){
				$scope.boton=true;
				$scope.msm="";
			}
		}
		if ($scope.boton==false){
		$scope.msm="[Error] Cedula no existe";
		}
	}
	
	
});

app.factory('listado',function($resource){
	return $resource("http://127.0.0.1:8000/materia",{},{get:{method:"GET",params:{},isArray:true}});
});

app.factory('listado2',function($resource){
	return $resource("http://127.0.0.1:8000/alumno",{},{get:{method:"GET",params:{},isArray:true}});
});

