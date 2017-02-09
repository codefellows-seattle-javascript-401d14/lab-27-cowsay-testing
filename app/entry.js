'use strict';

require('./base.scss');

const angular = require('angular');
const cowsay = require('cowsay-browser');

angular.module('cowsay27App', [])
.component('cowsay', {
  template: require('./cowsay.html'),
  controller: ['$log', function($log){
    this.$onInit = function(){
      this.title = 'cowsay lab-27 app';
      this.history = [];
      this.current = '';
      this.userInput = '';
      this.getCow = function(text, f){
        $log.log('text was', text, f);
        return cowsay.say({
          text: text || 'Hello friend.',
          f: 'stimpy',
        });
      };
      this.saveCow = function() {
        $log.log('saveCow');
        this.history.push(this.getCow(this.userInput));
        this.current = this.history[this.history.length - 1];
      };
      this.undoCow = function() {
        $log.log('undoCow');
        this.history.pop();
        this.current = this.history[this.history.length - 1];
      };
    };
  }],
});
