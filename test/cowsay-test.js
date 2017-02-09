'use strict';

require('angular-mocks');

const expect = require('chai').expect;
const cowsayBrowser = require('cowsay-browser');

describe('testing cowsay', function() {
  beforeEach((done) => {
    angular.mock.module('beerApp');
    angular.mock.inject(($componentController) => {
      this.$componentController = $componentController;
      done();
    });
  });

  beforeEach((done) => {
    this.cowsayCtrl = this.$componentController('cowsayContainer');
    this.cowsayCtrl.$onInit();
    done();
  });

  describe('testing initial state', () => {
    it('should initialize properties', (done) => {
      expect(this.cowsayCtrl.title).to.equal('Cow Beer App');
      expect(this.cowsayCtrl.userInput).to.equal('');
      expect(Array.isArray(this.cowsayCtrl.history)).to.equal(true);
      expect(this.cowsayCtrl.history.length).to.equal(0);
      expect(typeof this.cowsayCtrl.getCow).to.equal('function');
      done();
    });
  });

  describe('testing getCow', () => {
    it('should return a cow', (done) => {
      let result = this.cowsayCtrl.getCow();
      expect(result).to.equal(cowsayBrowser.say({text: 'Cant Hold a Cow Down!'}));
      done();
    });

    it('should return a cow a cow that says sup', (done) => {
      this.cowsayCtrl.userInput = 'sup';
      let result = this.cowsayCtrl.getCow(this.cowsayCtrl.userInput);
      expect(result).to.equal(cowsayBrowser.say({text: 'sup'}));
      done();
    });
  });
});
