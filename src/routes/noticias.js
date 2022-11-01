const { Router } = require('express');
const router = Router();


const noticias = require('../sample.json');

router.get('/', (req,res) => {
    res.json(noticias);
})


module.exports = router;