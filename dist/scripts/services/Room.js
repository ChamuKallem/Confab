(function() {
    function Room($firebaseArray, $uibModal){
        console.log("Testing room service")
        
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        rooms.openModal = function(){$uibModal.open({
                templateUrl: '/templates/new_room.html',  
                controller: function($scope, $uibModalInstance){
                
                }
        });
                                    }
        rooms.addRoom = function(){
            ref.child('room3').set({
                name: "Room 3", 
                createdOn: "Dec19"
            });
        };
        
        return {
        all: rooms 
        };
    }
    angular
        .module('Bloc-Chat')
        .factory('Room', ['$firebaseArray', '$uibModal', Room]);
})();