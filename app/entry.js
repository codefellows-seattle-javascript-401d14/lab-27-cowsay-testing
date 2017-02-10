'use strict';

const angular = require ('angular');
const cowsayBrowser = require('cowsay-browser');
require('./base.scss');

const KenApp = angular.module ('KenApp', []);

KenApp.component('cowsay', {
  template: require('./cowsay.html'),
  controller: [function () {
    this.$onInit = function() {
      this.title = 'The Cheese man App';
      this.userInput = '';
      this.name = 'Ken';
      this.getCheese = function(text){
        return cowsayBrowser.say ({text: text || 'hi', f:'cheese' });
      };
    };
  }],
});
