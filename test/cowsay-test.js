'use strict';

require('angular-mocks');
const expect = require('chai').expect;
const cowsayBrowser = require('cowsay-browser');

describe('testing cowsay component\'s controller', function() {
  beforeEach(done => {
    angular.mock.module('cowApp');
    angular.mock.inject($componentController => {
      this.$componentController = $componentController;
      done();
    });
  });

  beforeEach(done => {
    this.cowsayCtrl = this.$componentController('cowsay');
    this.cowsayCtrl.$onInit();
    done();
  });

  describe('testing initial state', () => {
    it('should initialize methods and properties', done => {
      expect(this.cowsayCtrl.title).to.equal('cow creator.');
      expect(this.cowsayCtrl.tagline).to.equal('make it, view it, and undo it!');
      expect(this.cowsayCtrl.userInput).to.equal('');
      expect(this.cowsayCtrl.history).to.be.instanceof(Array);
      expect(this.cowsayCtrl.history.length).to.equal(0);
      expect(typeof this.cowsayCtrl.getCow).to.equal('function');
      done();
    });
  });

  describe('testing getCow', () => {
    it('should return a cow that says "cowcontrol.io"', done => {
      let result = this.cowsayCtrl.getCow();
      expect(result).to.equal(cowsayBrowser.say({text: 'cowcontrol.io'}));
      done();
    });

    it('should return a cow that says hello', done => {
      this.cowsayCtrl.userInput = 'hello';
      let result = this.cowsayCtrl.getCow(this.cowsayCtrl.userInput);
      expect(result).to.equal(cowsayBrowser.say({text: 'hello'}));
      done();
    });
  });

  describe('testing viewCow', () => {
    it('should return a cow that says "cowabunga!"', done => {
      this.cowsayCtrl.userInput = 'cowabunga!';
      this.cowsayCtrl.viewCow();
      expect(this.cowsayCtrl.currentCow).to.equal(cowsayBrowser.say({text: 'cowabunga!'}));
      done();
    });
  });

  describe('testing undoCow', () => {
    it('should return ', done => {
      this.cowsayCtrl.userInput = 'mooyah';
      this.cowsayCtrl.viewCow();
      this.cowsayCtrl.userInput = 'grass is life';
      this.cowsayCtrl.viewCow();
      this.cowsayCtrl.undoCow();
      expect(this.cowsayCtrl.currentCow).to.equal(cowsayBrowser.say({text: 'mooyah'}));
      expect(this.cowsayCtrl.history.length).to.equal(1);
      done();
    });
  });
});
