'use strict';

//gets some mocks
require('angular-mocks');

//npm modules
const expect = require('chai').expect;
const cowsayBrowser = require('cowsay-browser');

describe('testing cowsay component\'s controller', function () {
  beforeEach((done) => {
  //mocks demoApp before each respective test
  //componentController allows the developer to mock the components
    angular.mock.module('cowApp');
    angular.mock.inject(($componentController) => {
      this.$componentController = $componentController;
      done();
    });
  });
  beforeEach((done) => {
    //mocks cowsay's controllers
    //runs onInit to set up state
    this.cowsayCtrl = this.$componentController('cowsay');
    this.cowsayCtrl.$onInit();
    done();
  });
  describe('testing the initial state of the website', () => {
    it('should initialize all the methods and properties', (done) => {
      expect(this.cowsayCtrl.title).to.equal('cows are cool'); //TODO: change this
      expect(this.cowsayCtrl.userInput).to.equal('');
      expect(Array.isArray(this.cowsayCtrl.history)).to.equal(true);
      expect(this.cowsayCtrl.history.length).to.equal(0);
      expect(typeof this.cowsayCtrl.getCow).to.equal('function');
      done();
    });
  });
  describe('testing getCow', () => {
    it('should return a cow that says "Blargargargar"', (done) => {
      let result = this.cowsayCtrl.getCow();
      expect(result).to.equal(cowsayBrowser.say({text: 'Blargargargar', f: 'kitty'}));
      done();
    });
    it('should return a cow that says hello', (done) => {
      this.cowsayCtrl.userInput = 'hello';
      let result = this.cowsayCtrl.getCow(this.cowsayCtrl.userInput);
      expect(result).to.equal(cowsayBrowser.say({text: 'hello', f: 'kitty'}));
      done();
    });
  });
});
