const store = require('./store');


function addMessage(user, message) {
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.error("[messageController] No hay usuario o mensaje");
      return reject("Datos incorrectos");
    } else {
      const fullMessages = {
        user: user,
        message: message,
        date: new Date()
      };
      store.add(fullMessages);
      resolve(fullMessages);
    }
  });
}

function getMessages(filterUser) {
    return new Promise((resolve, reject) => {
        resolve(store.list(filterUser));
    })
}

function updateMessage(id, message) {
    return new Promise(async(resolve, reject) => {
        if (!id || !message) {
            reject('Invalid Data');
        }
        const result = await store.updateText(id, message )
        resolve(result)
        console.log(result);           
    });
}

function deleteMessage(id) {
  return new Promise((resolve, reject) => {
    if(!id) {
      reject('Id invalido');
      return false;
    }
    store.remove(id)
    .then(() => {
       resolve()
      })
      .error(e => {
        reject(e)})
      })
}

module.exports = {
  addMessage,
  getMessages,
  updateMessage,
  deleteMessage
};
