'use strict';

require('angular-mocks');
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
  //mocking controllers
  beforeEach( (done)  => {
    this.cheeseCtrl = this.$componentController('cowsay');
    this.cheeseCtrl.$onInit();
    done();
  });

  describe('testing initital state', () => {
    it('should initialize methods and properties', (done) => {
      expect(this.cheeseCtrl.title).to.equal('The Cheese man App');
      expect(this.cheeseCtrl.userInput).to.equal('');
      expect(this.cheeseCtrl.name).to.equal('Ken');
      expect(typeof this.cheeseCtrl.getCheese).to.equal('function');
      done();
    });
  });

  describe('testing getCheese method',() => {
    it('should return "Make Cheeseman say something cool"', (done) => {
      let result = this.cheeseCtrl.getCheese();
      console.log(result);
      expect(result).to.equal(cowsayBrowser.say({text: 'hi', f: 'cheese'}));
      done();
    });
    it('should return a cheeseMan that says wat up', (done)=> {
      this.cheeseCtrl.userInput = 'wat up';
      let result = this.cheeseCtrl.getCheese(this.cheeseCtrl.userInput);
      expect(result).to.equal(cowsayBrowser.say({text: 'wat up', f:'cheese'}));
      done();
    });
  });

});
