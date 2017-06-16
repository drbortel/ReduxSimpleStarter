'use strict';
const assert = require('assert');
console.log('start test');

module.exports = () => {

  describe('Parking Calc Test Group', () => {
    it('gets the title of Parking Calculator page', () => {
      //return
      browser.url('http://adam.goucher.ca/parkcalc/')
        .getTitle().then(title => {
           assert.equal(title, 'Parking Calculator')
        })
    })
  })

};
