app.controller('search-rides', ['$scope', 'Users', 'ModalMessage', function($scope, Users, ModalMessage) {
  
  $scope.users = Users.getAll();
  $scope.filtered_users = [];

  $scope.dataSource = ["Acacio Figueiredo ", "Alto Branco ", "Bairro das Cidades ", "Bela Vista ", "Bodocongo ", "Cachoeira ", "Castelo Branco", "Catole", "Catole de Ze Ferreira", "Centenario ", "Centro ", "Conjunto Cinza ", "Dinamerica ", "Distrito de Catole ", "Distrito Industrial ", "Estacao Velha ", "Estreito ", "Gloria ", "Itarare", "Jardim Atalaia", "Jardim Borborema ", "Jardim Paulistano ", "Jardim Verdejante ", "Jeremias ", "Jose Pinheiro ", "Lauritzen ", "Liberdade ", "Ligeiro ", "Louzeiro ", "Malvinas ", "Mirante ", "Monte Castelo", "Monte Santo", "Mutirao do Serrotao", "Nova Brasilia ", "Novo Bodocongo", "Palmeira ", "Pedregal ", "Prata ", "Presidente Medici ", "Quarenta ", "Ramadinha ", "Sandra Cavalcante ", "Santa Cruz", "Santa Rosa ", "Santa Terezinha ", "Santo Antonio ", "Sao Jose ", "Sao Jose da Mata ", "Serrotao ", "Sitio Estreito ", "Sitio Lucas ", "Tambor ", "Tres Irmas ", "Universitario ", "Velame ", "Vila Cabral"];

  $scope.searchWasMade = false;

  $scope.modal_title = "";
  $scope.modal_message = "";

  $scope.search = function() {
  	
  	for(var i = 0; i < $scope.users.length; i++) {
  		$scope.filtered_users.push($scope.users[i]);
  	}

	$scope.searchWasMade = true;
  };

  $scope.setModalMessage = function(evt) {
  	
  	var id = evt.target.id;
  	var modal_auxiliar = undefined;

  	if(id == 'send-invitation') modal_auxiliar = ModalMessage.SEND_INVITATION;
  	if(id == 'notify-me') modal_auxiliar = ModalMessage.NOTIFY_ME;
  	if(id == 'make-a-friend') modal_auxiliar = ModalMessage.MAKE_A_FRIEND;

  	$scope.modal_title = modal_auxiliar.title;
  	$scope.modal_message = modal_auxiliar.message;

  }
}]);

$(document).ready(function () {

	//ativa o datepicker
    $('#date').datepicker({
        format: "dd/mm/yyyy"
    });  

	//ativa o switch
	$("#way-cb").bootstrapSwitch(); 

	//ativa o timepicker
	 $('#time').timepicker();
});