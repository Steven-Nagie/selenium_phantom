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
    client.getTitle((err, title) => {
      if (err) {
        console.log(err);
      }
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
      if(err) console.log(err);
      expect(title).to.have.string("Resort Comparison");
      done();
    })
  })

  it("should input dropdown value 'Miles to Closest Major Airport'", (done) => {
    client.click('.js-resort-comparison-select');
    // For whatever reason it can't find this element.
    client.click('=Miles to Closest Major Airport');
    //client.selectOption('.js-resort-comparison-select', 'Miles to Closest Major Airport');
    client.getTitle((err, title) => {
      if(err) console.log(err);
      expect(title).to.have.string("Resort Comparison");
      done();
    })
  })

})
