describe('calculator', function () {

    beforeEach(module('calculatorApp'));

    var $controller;

    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));

    // xdescribe to skip all tests in this block
    describe('sum', function () {

        beforeEach(function() {
            this.addMatchers({
                toBeFive: function() {
                    this.message = function() {
                        return this.actual + " is not 5!";
                    };
                    return this.actual === 5;
                }
            })
        });

        it('1 + 1 should equal 2', function () {
            var $scope = {};
            var controller = $controller('CalculatorController', { $scope: $scope });
            $scope.x = 1;
            $scope.y = 2;
            $scope.sum();
            expect($scope.z).toBe(3);
        });

        xit('z should have default value of zero', function () {
            var $scope = {};
            var controller = $controller('CalculatorController', { $scope: $scope });
            expect($scope.z).toBe(0);
        });

        xit('should be skipped', function () {
            var $scope = {};
            var controller = $controller('CalculatorController', { $scope: $scope });
            expect($scope.z).toBe(0);
        });

    });

});