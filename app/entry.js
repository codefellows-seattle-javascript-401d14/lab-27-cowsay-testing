'use strict';

require('./css/base.scss');

const angular = require('angular');
const cowsay = require('cowsay-browser');

angular.module('cowsay27App', [])
.component('navbar', {
  template:
  require('./views/partials/navbar.html'),

})
.component('cowsayOptions', {
  template:
  require('./views/partials/cowsay-options.html'),
})
.component('cowsay', {
  template:
   require('./views/partials/cowsay.html'),
  controller: ['$log', function($log){
    this.$onInit = function(){
      this.title = 'cow creator.';
      this.motto = 'make it, view it, and undo it!';
      this.titleView = 'view it!';
      this.mottoView = 'check out the cow you just made!';
      this.history = [];
      this.current = '';
      this.userInput = '';
      this.getCow = function(text, f){
        $log.log('text was', text, f);
        return cowsay.say({
          text: text || 'cowcontrol.io',
          f: 'turtle',
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
