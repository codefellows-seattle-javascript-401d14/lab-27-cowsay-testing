'use strict';

require('./base.scss');

const angular = require('angular');
const cowsayBrowser = require('cowsay-browser');

const cowApp = angular.module('cowApp', []);

cowApp.component('cowsay', {
  template: require('./cowsay.html'),
  controller: [function() {
    this.$onInit = function() {
      this.title = 'cow creator.';
      this.tagline = 'make it, view it, and undo it!';
      this.userInput = '';
      this.history = [];
      this.currentCow = '';

      this.getCow = function(text) {
        return cowsayBrowser.say({text: text || 'cowcontrol.io'});
      };

      this.viewCow = function() {
        this.history.push(this.getCow(this.userInput));
        this.currentCow = this.history[this.history.length - 1];
      };

      this.undoCow = function() {
        this.history.pop();
        this.currentCow = this.history[this.history.length - 1];
      };
    };
  }],
});
