(function(){
    function modalCtrl($uibModal){
        var $ctrl = this;
        $ctrl.animationsEnabled = true;
        $ctrl.open = function () {
        var modalInstance = $uibModal.open({
              animation: $ctrl.animationsEnabled,
              ariaLabelledBy: 'modal-title',
              ariaDescribedBy: 'modal-body',
              templateUrl: 'myModalContent.html',
              controller: 'modalInstCtrl',
              controllerAs: '$ctrl'
            });
        }
    }
    angular
        .module('Bloc-Chat')
        .controller('modalCtrl', ['$uibModal', modalCtrl]);
})();