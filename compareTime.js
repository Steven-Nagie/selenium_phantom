const client = require('./client').client,
      expect = require('chai').expect;

describe('Test skiutah.com', function() {
  this.timeout(25000);

  before((done) => {
    client.init().url('http://www.skiutah.com', done);
  });

  after((done) => {
    client.end(done);
  })

  it('should see the correct title', (done) => {
    client.getTitle((err, title) => {
      console.log(title);
      expect(title).to.have.string("Ski Utah");
      done();
    })
  })

  it('should click through to resort page', (done) => {
    var clicky = client.findElement(webdriver.By.class("SuperfishMegaMenu-subLink"));
    clicky.selectByVisibleText("Compare Resorts");
    // client.click(".SuperfishMegaMenu-subLink=Compare Resorts");
    client.getTitle((err, title) => {
      console.log(title);
      expect(title).to.have.string("Compare Resorts");
      done();
    })
  })

})
