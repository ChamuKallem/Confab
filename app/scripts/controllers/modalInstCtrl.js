(function(){
    function modalInstCtrl(roomService, $uibModalInstance, $scope){
        var $ctrl = this;

        $ctrl.focus = function(){
          $$uibModalInstance.focus();
        };
        $ctrl.ok = function () {
            $uibModalInstance.close();
            var newRoomName = $scope.newRoomName;
            var newRoomCreatedOn = new moment().valueOf();
            roomService.addRoom(newRoomName,newRoomCreatedOn);
        };

        $ctrl.cancel = function () {
          $uibModalInstance.dismiss('cancel');
        };
    }
    angular
        .module('Bloc-Chat')
        .controller('modalInstCtrl', ['roomService', '$uibModalInstance', '$scope', modalInstCtrl])
})();
