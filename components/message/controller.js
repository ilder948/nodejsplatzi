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

function getMessages() {
    return new Promise((resolve, reject) => {
        resolve(store.list());
    })
}

function updateMessage(id, message) {
    return new Promise(async(resolve, reject) => {
        if (!id || !message) {
            reject('Invalid Data');
        }
        const result = await store.updateText(id, message )
        resolve(result)
    })
}

module.exports = {
  addMessage,
  getMessages,
  updateMessage
};
