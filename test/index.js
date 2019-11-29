'use strict';

var should = require('chai').should();
var sumcore = require('../');

describe('#versionGuard', function() {
  it('global._litecore should be defined', function() {
    should.equal(global._litecore, sumcore.version);
  });

  it('throw an error if version is already defined', function() {
    (function() {
      sumcore.versionGuard('version');
    }).should.throw('More than one instance of sumcore');
  });
});
