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
      expect(this.cowsayCtrl.title).to.equal('cows are alright');
      expect(this.cowsayCtrl.userInput).to.equal('');
      expect(this.cowsayCtrl.history).to.be.instanceof(Array);
      expect(this.cowsayCtrl.history.length).to.equal(0);
      expect(typeof this.cowsayCtrl.getCow).to.equal('function');
      done();
    });
  });

  describe('testing getCow', () => {
    it('should return a cow that says "MOOOYAH!!"', done => {
      let result = this.cowsayCtrl.getCow();
      expect(result).to.equal(cowsayBrowser.say({text: 'MOOOYAH!!', f: 'supermilker'}));
      done();
    });

    it('should return a cow that says hello', done => {
      this.cowsayCtrl.userInput = 'hello';
      let result = this.cowsayCtrl.getCow(this.cowsayCtrl.userInput);
      expect(result).to.equal(cowsayBrowser.say({text: 'hello', f: 'supermilker'}));
      done();
    });
  });
});
