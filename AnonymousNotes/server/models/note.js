const mongoose = require('mongoose');
const { Schema } = mongoose;
//const uniqueValidator = require('mongoose-unique-validator');

const noteSchema = new Schema({
    content: {
      type: String,
      trim: true,
      required: [true, 'Note content is required'],
      minlength: [3, 'Note Content length must be greater than 3'],
      //unique: true
    },
  }, {
    timestamps: true
  });

  //noteSchema.plugin(uniqueValidator, { message: '{PATH} must be unique.' });
  //const Task = mongoose.model('Task', taskSchema);
  module.exports = mongoose.model('Note', noteSchema);