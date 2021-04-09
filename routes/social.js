const express = require('express')
const router = express.Router()

// Hien thi tat ca cac bai viet
router.get('/google', async (req, res) => {
    let profile = req.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    res.render('google/index', { profile })
})

module.exports = router
