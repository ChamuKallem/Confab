(function(){
    function roomCtrl(roomService, $scope){
        this.Rooms = roomService.Rooms;
        this.roomService = roomService;
        this.Messages = roomService.Messages;
        $scope.send = function(){
            roomService.send($scope.typedMessage);
            $scope.typedMessage = '';
        }
        //this.send = roomService.send($scope.typedMessage);
        //$scope.typedMessage = '';
    }
    angular
        .module('Bloc-Chat')
        .controller('roomCtrl', ['roomService', '$scope', roomCtrl]);
})();