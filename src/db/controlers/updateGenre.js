const Book = require("../models/bookmodels");

async function upGenre(req,res) {
    try {
        const  append = await Book.update(
        {genre: req.body.genre},
        {where: {title: req.body.title}}
    );
        console.log(append);
        res.status(200).json(`The genre of ${req.body.title}, has been changed to ${req.body.genre}`);

    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}


module.exports = upGenre;