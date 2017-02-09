'use strict';

const angular = require('angular');
const cowsayBrowser = require('cowsay-browser');

const cowApp = angular.module('cowApp', []);

cowApp.component('cowsay', {
  template: require('./cowsay.html'),
  controller:[function() {
    this.$onInit = function() {
      this.title = 'cows are cool';
      this.userInput = '';
      this.history = [];

      this.getCow = function(text) {
        return cowsayBrowser.say({text: text || 'Blargargargar', f: 'kitty'});
      };
    };
  }],
});
