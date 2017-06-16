import assert from '../assert';

module.exports = () => {

  describe('Parking Calc Test Group', () => {

    console.log("in parking calc test");
    it('gets the title of Parking Calculator page', () => {
      console.log("in it...");
      return browser.url('http://adam.goucher.ca/parkcalc/')
        .getTitle().then(title => {
           assert.equal(title, 'Parking Calculator')
        })
    })
  })

}
