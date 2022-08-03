const express = require('express');
const router = express.Router();
const Contact = require('./models/contact')

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/contact', (req, res) => {
    res.render('contact')
})

router.get('/', (req, res) => {
    res.render('education')
})

router.get('/experience', (req, res) => {
    res.render('experience')
})

router.get('/graphicDesign', (req, res) => {
    res.render('graphicDesign')
})

router.get('/photography', (req, res) => {
    res.render('photography')
})

router.post('/submitContact', (req, res) => {
    const contact = new Contact ({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        comment: req.body.comment
    });

    Contact.collection.insertOne(contact)
    .then(result => {
        res.render('contact')
    })
    .catch(err => console.log(err));
})

module.exports = router;