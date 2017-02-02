const client = require('./client').client,
      chai = require('chai'),
      expect = require('chai').expect,
      chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

describe('Test skiutah.com', function() {
  this.timeout(25000);

  before((done) => {
    client.init().url('http://www.skiutah.com', done);
  });

  after((done) => {
    client.end(done);
  })

  it('should see the correct title', (done) => {
    console.log("Should be grabbing title now");
    client.getTitle((err, title) => {
      if (err) {
        console.log(err);
      }
      console.log(title);
      expect(title).to.have.string("Ski Utah");
      done();
    })
    // var title = client.getTitle();
    // console.log(title);
    // expect(title).to.eventually.have.string("Ski Utah");
    // done();
  })

  it('should click through to resort page', (done) => {
    // var clicky = client.findElement(webdriver.By.class("SuperfishMegaMenu-subLink"));
    client.click(".SuperfishMegaMenu-topLink");
    client.click("=Compare Resorts");
    // client.click(".SuperfishMegaMenu-subLink=Compare Resorts");
    client.getTitle((err, title) => {
      console.log(title);
      expect(title).to.have.string("Compare Resorts");
      done();
    })
  })

})
