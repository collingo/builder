'use strict';
var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var expect = chai.expect;
chai.use(sinonChai);

var sandbox;

//// SUT
var Builder = require('../src/builder');

describe('Builder', function() {

  beforeEach(function() {
    sandbox = sinon.sandbox.create();
  });

  afterEach(function() {
    sandbox.restore();
  });

  it('should write proper tests', function() {
    expect(true).to.be.true;
  });

});