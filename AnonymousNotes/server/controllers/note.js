const Note = require('mongoose').model('Note');

module.exports={
    index(request, response) {
        Note.find({})
        .then(notes => response.json(notes))
        .catch(error => console.log(error));
    },

    show(request, response) {},
    edit(request, response) {},
    new(request, response) {},
    update(request, response) {},

    create(request, response) {
        Note.create(request.body)
        .then(note => response.json(note))
        .catch(error => console.log(error));
    },
    
    destroy(request, response) {}
    
}