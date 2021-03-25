const {Router} = require('express');
const {spellsGet} = require('../controllers/spells')
const router = Router()


router.get('/', spellsGet)

module.exports = router;