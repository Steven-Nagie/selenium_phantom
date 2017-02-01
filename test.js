const client = require('./client').client,
      chai = require('chai'),
      expect = require('chai').expect;


describe('Test example.com', function() {
  this.timeout(25000);
  // Done is passed into the init.url function as a callback so we don't have to call it elsewhere
  before(function(done) {
    client.init().url('http://example.com', done);
  });

  describe("Check home page", function() {
    it('should see the correct title', function(done) {
      client.getTitle(function(err, title) {
        expect(title).to.have.string("Example Domain");
        done();
      });
    });

    it('should see the body', function(done) {
      // Grabs the text within the p tag.
      client.getText('p', function(err, p) {
        console.log(p);
        expect(p).to.have.string("for illustrative examples in documents");
        done();
      })
    })
  });

  after(function(done) {
    client.end(done);
  })
}); //End of 'Test example.com' describe
