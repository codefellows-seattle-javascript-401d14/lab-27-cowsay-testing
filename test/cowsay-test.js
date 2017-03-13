'use strict';

require('angular-mocks');
const angular = require('angular');
const expect = require('chai').expect;
const cowsayBrowser = require('cowsay-browser');

describe('testing cowsay component\'s controller', function() {
  beforeEach(done => {
    angular.mock.module('demoApp');
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
      expect(this.cowsayCtrl.userInput).to.equal('');
      expect(this.cowsayCtrl.history).to.be.instanceof(Array);
      expect(this.cowsayCtrl.currentCow).to.be.equal('');
      expect(this.cowsayCtrl.history.length).to.equal(0);
      expect(typeof this.cowsayCtrl.getCow).to.equal('function');
      expect(typeof this.cowsayCtrl.saveCow).to.equal('function');
      expect(typeof this.cowsayCtrl.undoCow).to.equal('function');
      done();
    });
  });

  describe('testing getCow', () => {
    it('should return a cow that says "Got milk?"', done => {
      let result = this.cowsayCtrl.getCow();
      expect(result).to.equal(cowsayBrowser.say({text: 'Got milk?'}));
      done();
    });

    it('should return a cow that says MOOVE Over', done => {
      this.cowsayCtrl.userInput = 'MOOVE Over';
      let result = this.cowsayCtrl.getCow(this.cowsayCtrl.userInput);
      expect(result).to.equal(cowsayBrowser.say({text: 'MOOVE Over'}));
      done();
    });
  });

  describe('testing saveCow', () => {
    it('should return a cow that says HEEEEYYY', done => {
      this.cowsayCtrl.userInput = 'HEEEEYYY';
      this.cowsayCtrl.saveCow();
      expect(this.cowsayCtrl.currentCow).to.equal(cowsayBrowser({text:'HEEEEYYY'}));
      done();
    });
  });

});
