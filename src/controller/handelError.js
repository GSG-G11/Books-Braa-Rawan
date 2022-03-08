const { join } = require('path');

const handleErrorNotFound = (req, res, next) => {
    res
      .status(404)
      .sendFile(join(__dirname, '..', '..', 'public', 'html', '404.html'));

};
const handleErrorServer = (err, req, res, next) => {
    res
      .status(500)
      .sendFile(join(__dirname, '..', '..', 'public', 'html', '500.html'));
};

module.exports = { handleErrorNotFound, handleErrorServer };
