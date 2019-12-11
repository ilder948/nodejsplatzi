
function addMessage(user, message) {
    return new Promise((resolve, reject) => {
        if(!user || !message) {
            console.error('[messageController] no hay ususario o mensaje');
            return reject('Dato incorrecto');
        } else {
    const fullMessages = {
        user: user,
        message: message,
        date: new Date()
    };

    console.log(fullMessages);
    resolve(fullMessages)
        }
    });  
}

module.exports = {
    addMessage,
};
