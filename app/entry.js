'use strict';

const angular = require('angular');
const cowsay = require('cowsay-browser');

angular.module('beerApp', [])
.component('cowsayContainer', {
  template: require('./cowsay.html'),
  controller: ['$log', function($log) {
    this.$onInit = function() {
      this.title = 'Cow Beer App';
      this.userInput = '';
      this.history = [];
      this.currentCow = '';

      this.saveCow = function(){
        this.history.push(this.getCow(this.userInput));
        this.currentCow = this.history[this.history.length - 1 ];
      };

      this.undoCow = function(){
        this.history.pop();
        this.currentCow = this.history[this.history.length - 1 ];
      };

      this.getCow = function(text) {
        $log.log('whatever', text);
        return cowsay.say({text: text || 'Cant Hold a Cow Down!'});
      };
    };
  }],
});
