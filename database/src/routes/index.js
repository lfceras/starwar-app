const { Router } = require("express");
const middlewares = require('../middlewares') 
const controllers = require('../controllers')


const router = Router();

router.get("/:model", middlewares.validateModell,controllers.getData);

router.get("/:model/:id",middlewares.validateModell ,controllers.getDataById)


module.exports = router;
