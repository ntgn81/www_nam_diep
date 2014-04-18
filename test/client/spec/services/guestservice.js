'use strict';

describe('Service: Guestservice', function () {

  // load the service's module
  beforeEach(module('wwwNamDiepApp'));

  // instantiate service
  var Guestservice;
  beforeEach(inject(function (_Guestservice_) {
    Guestservice = _Guestservice_;
  }));

  it('should do something', function () {
    expect(!!Guestservice).toBe(true);
  });

});
