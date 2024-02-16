//middleware functions

const logCreateRequest = (req, res, next) => {
    console.log(`
    Create book with ID: ${req.body.id}
    Adding new book with BooksName: ${req.body.BooksName},
    ISBN:${req.body.ISBN},
    Author: ${req.body.Author},
    Genre:${req.body.Genre},
    Rating: ${req.body.Rating}`);
    next();
}

const logReadRequest = (req, res, next) => {
    console.log('Fetch all books.');
    next();
}

const logUpdateRequest = (req, res, next) => {
    console.log(`
    Update book with ID: ${req.params.id},
    BooksName: ${req.body.BooksName},
    ISBN:${req.body.ISBN},
    Author: ${req.body.Author},
    Genre:${req.body.Genre},
    Rating: ${req.body.Rating}`);
    next();
}

const logDeleteRequest = (req, res, next) => {
    console.log(`Delete book with ID: ${req.params.id}`);
    next();
}

module.exports = {
    logCreateRequest,
    logReadRequest,
    logUpdateRequest,
    logDeleteRequest,
};
