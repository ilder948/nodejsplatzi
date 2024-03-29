const express = require("express");
const response = require("../../network/response");
const controller = require("./controller");
const router = express.Router();

router.get("/", function(req, res) {
    const filterMessages = req.query.user || null;
    controller.getMessages(filterMessages)
    .then((messagesList) => {
        response.success(req, res, messagesList, 200)
    })
    .catch(e => {
        response.error(req, res, 'Unexpexted Error', 500, e)
    })
});

router.post("/", function(req, res) {
  controller
    .addMessage(req.body.user, req.body.message)
    .then(fullMessage => {
      response.success(req, res, fullMessage, 201);
    })
    .catch(e => {
      response.error(req, res, "Informacion Invalida", 400, e);
    });
});

router.patch('/:id', function(req, res) {
    controller.updateMessage(req.params.id, req.body.message)
    .then((data) => {
        response.success(req, res, data, 200);
    })
    .catch(e => {
        response.error(req, res, 'Error Interno', 500, e)
    })
})

router.delete('/:id', function(req, res) {
    controller.deleteMessage(req.params.id)
    .then(() => {
        response.success(req, res, 'Mensaje Eliminado', 200);
    })
    .catch(e => {
        response.error(req, res, 'Error al eliminar', 500, e)
    })
})



module.exports = router;
