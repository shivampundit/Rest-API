const db = require('../config/dbconfig.js');

//add a book

exports.addBook = (request, response) => {
    db.insert(
      {
        table: 'book',
        records: [
          {
            title: request.body.title,
            author: request.body.author
          }
        ]
      },
      (err, res) => {
        if (err) response.status(500).json(err);
  
        response.status(res.statusCode).json(res.data);
      }
    );
  };

  //search a book by author

  exports.getByAuthor = (request, response) => {
    db.searchByValue(
      {
        table: 'book',
        searchAttribute: 'author',
        searchValue: request.body.author,
        attributes: ['*']
      },
      (err, res) => {
        if (err) response.status(500).json(err);
  
        console.log(res);
  
        response.status(res.statusCode).json(res.data);
      }
    );
  };

  //search a book by hash
  exports.getById = (request, response) => {
    db.searchByHash(
      {
        table: 'book',
        hashValues: [request.body.id],
        attributes: ['title', 'author']
      },
      (err, res) => {
        if (err) response.status(500).json(err);
  
        response.status(res.statusCode).json(res.data);
      }
    );
  };

  //delete a book
  exports.deleteBook = (request, response) => {
    db.delete(
      {
        table: 'book',
        hashValues: [request.body.id]
      },
      (err, res) => {
        if (err) response.status(500).json(err);
  
        response.status(res.statusCode).json(res);
      }
    );
  };