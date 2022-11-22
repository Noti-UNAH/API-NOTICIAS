const { Router } = require('express');
const fs = require ('fs');
const router = Router();


const noticias = require('../sample.json');
let data = fs.readFileSync ('src/sample.json');
let myObject = JSON.parse (data);

router.get('/', (req,res) => {
    res.json(noticias);
});

router.post('/', (req, res) => {
    const id = noticias.length + 1;
    const { title, descr, cuerpo, fecha,img } = req.body;
    const newNoticia = { ...req.body, id };
    if (id && title && descr && cuerpo && fecha && img) {
       noticias.push(newNoticia);
       myObject.push(newNoticia);
       let newData2 = JSON.stringify(myObject);
       fs.writeFile("src/sample.json", newData2, (err) =>{
        if(err) throw err;
        console.log("New data added");
       })
        res.json(noticias);
    } else {
        res.status(500).json({error: 'There was an error.'});
    }
});


module.exports = router;