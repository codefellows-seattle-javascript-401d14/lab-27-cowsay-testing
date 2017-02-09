'use strict';

const angular = require('angular');
const expect = require('chai').expect;
const cowsayBrowser = require('cowsay-browser');

describe('testing cheeseman component controller', function (){
  beforeEach( (done) => {
    angular.mock.module('KenApp');
    angular.mock.inject(($componentController) => {
      this.$componentController = $componentController;
      done();
    });
  });
});
//mocking controllers
beforeEach( (done)  => {
  this.cheeseCtrl = this.$componentController('cowsay');
  this.cheeseCtrl.$onInit();
  done();
});
