(function(){
    function roomService($firebaseArray, $state){
        var service = {};
        //Auth
        
        //End Auth
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        var chatrooms = {
            all: rooms 
            };  
        service.Rooms = chatrooms.all;
    
        service.addRoom = function(name, date){
        ref.child(name).set({
                name: name, 
                createdOn: date
                });
            }
        service.displayRoom = function (roomid){
            angular.forEach(service.Rooms, function(room) {
                if (room.$id === roomid){
                    service.room = room;
                    service.roomSelected = true;
                    }   
                })

            var refmessages = firebase.database().ref("messages").orderByChild("roomId").equalTo(roomid);
            var messages = $firebaseArray(refmessages);
            var filterMessages = {
                    all: messages
                    };
            service.Messages = filterMessages.all;
        }
        
        service.send = function(message){
            if (service.room){
                var refmessages = firebase.database().ref("messages");
                if (refmessages != null && message !=null ){
                    var newMessageRef = refmessages.push();
                    newMessageRef.set({
                            roomId: service.room.$id,
                            content:message,
                            sentAt: new Date().getTime(),
                            username: service.user
                        });
                    service.displayRoom(service.room.$id);
                    }
                }
            }  
        service.updateUserInFB = function(user){
            service.user = user
        }
        service.logout = function(){
            const promise = firebase.auth().signOut();
            $state.go('login')
            console.log(promise);
        }
        return service;
    }
    angular
        .module('Bloc-Chat')
        .service('roomService', ['$firebaseArray', '$state' ,roomService]);
})();