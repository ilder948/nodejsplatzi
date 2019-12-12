
const db = require('mongoose');
const Model = require('./model')

db.Promise = global.Promise;
db.connect('mongodb+srv://db_user_nodejs:Ibmvla948.@cluster0-hbilv.gcp.mongodb.net/chatnodejs_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
console.log('db conectada con exito');


function addMessage(message) {
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessages() {
    const messages = await Model.find();
    return messages
}

async function updateText(id, message) {
    const foundMessages = await Model.findOne({
        _id: id
    })
    foundMessages.message = message;
    const newMessage = await foundMessages.save();
    return newMessage;
}

module.exports = {
    add: addMessage,
    list: getMessages,
    updateText: updateText,
    //get
    //update
    //delete
}