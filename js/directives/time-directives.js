angular.module( 'np.app.directives' )
    .directive( 'npValidateTimeValue', [ function() {
        return {
            restrict: 'C',
            link: function( scope, el, attrs ) {
                var element = $( el );
                var timepickerInited = false;

                scope.$watch('workout.startTime', function (val) {
                    if(!timepickerInited){
                        element.timeEntry({
                            allowRemove: false,
                            ampmPrefix: " ",
                            afterChange: function(val) {
                                scope.workout.startTime = val;

                                if(!scope.$$phase) {
                                    scope.$apply();
                                }
                            }
                        });
                        
                        timepickerInited = true;
                    }

                    element.timeEntry('setTime', val);
                });                

                scope.$watch('workout.timeFormat', function (val) {
                    element.timeEntry('option', {show24Hours: (val == 24)});
                });          
            }
        }
    }]);