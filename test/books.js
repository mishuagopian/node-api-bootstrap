const chai = require('chai'),
  server = require('./../app'),
  should = chai.should();

describe('books', () => {
  describe('/books GET', () => {
    it('should return all books', () => {
      const res = chai.request(server).get('/books');
      res.should.eventually.have.status(200);
      return res.should.eventually.be.json;
      // return res.should.eventually.have.property('body').should.eventually.be.a('array');
      // res.body.books[0].should.have.property('id');
      // res.body.books[0].should.have.property('name').should.not.be.null;
      // res.body.books[0].should.have.property('author');
      // res.body.books[0].should.have.property('publisher');
      // res.body.books[0].should.have.property('price');
      // res.body.books[0].should.have.property('link');
      // return res.body.books[0].should.have.property('year');
    });
  })

  describe('/books/:id GET', () => {
    it.only('should return book with id 1', () => {
      const res = chai.request(server).get('/books/1');
      res.should.eventually.have.status(200);
      res.should.eventually.be.json;
      const body = res.should.eventually.have.property('body');
      return body.should.eventually.have.property('id');
      // res.should.eventually.have.property('body').should.eventually.have.property('name').should.eventually.not.be.null;
      // res.should.eventually.have.property('body').should.eventually.have.property('author');
      // res.should.eventually.have.property('body').should.eventually.have.property('publisher');
      // res.should.eventually.have.property('body').should.eventually.have.property('price');
      // res.should.eventually.have.property('body').should.eventually.have.property('link');
      // return res.should.eventually.have.property('body').should.eventually.have.property('year');
    });

    it('should return error for book with id 5', (done) => {
      chai.request(server)
        .get('/books/5')
        .end((err, res) => {
          res.should.have.status(400);
          res.should.be.json;
          res.body.should.have.property('error');
          done();
        });
    });
  });
});
