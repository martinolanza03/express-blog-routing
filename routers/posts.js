const express = require('express');
const router = express.Router();

//index, shaw all element
router.get('/', (req, res) => {
    res.send('Lista dei posts');
});

//show display element with id
router.get('/:id', (req, res) => {
    res.send(`Dettagli del posts ${req.params.id}`);
});

//create new element
router.post('/', (req, res) => {
    res.send(`Creare un nuovo elemento`);
});

//update element
router.put('/:id', (req, res) => {
    res.send(`Modifica integrale dell'elemento con id ${req.params.id}`);
});

//modify element
router.patch('/:id', (req, res) => {
    res.send(`Modifica parziale dell'elemento con id ${req.params.id}`);
});

//modify element
router.delete('/:id', (req, res) => {
    res.send(`Eliminazione dell'elemento con id ${req.params.id}`);
});

module.exports = router;