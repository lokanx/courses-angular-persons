'use strict';

describe('Directive: modalDialog', function () {

    // load the directive's module
    beforeEach(module('myApp'));

    var element,
        scope;

    beforeEach(inject(function ($rootScope) {
        scope = $rootScope.$new();
    }));

    it('should make hidden element visible', inject(function ($compile) {
        element = angular.element('<modal-dialog></modal-dialog>');
        element = $compile(element)(scope);
        //expect(element.text()).toBe('this is the modalDialog directive');
    }));
});
