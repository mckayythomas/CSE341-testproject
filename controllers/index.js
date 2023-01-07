displayName = (req, res) => {
    const data = 'Mariana Valeria Rodriguez Fuentes Rivera De Thomas';
    res.status(200).send(data);
};

module.exports = {
    displayName
};