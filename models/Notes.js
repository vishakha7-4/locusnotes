const mongoose = require('mongoose');

const { Schema } = mongoose;


const collegeSchema = {
  name: { type: String, required: true },
  university: { type: String, required: true },
  country: { type: String, reuired: true }
};

const courseSchema = {
  code: { type: String, required: true },
  name: { type: String, required: true },
  college: [
    {
      ref: 'College',
      required: true,
      type: Schema.Types.ObjectId
    }
  ],
};

const notesSchema = new Schema({
  title: { type: String, required: true, max: 150 },
  description: { required: true, type: String },
  course: {
    ref: 'Course',
    required: true,
    type: Schema.Types.ObjectId
  },
  semester: { type: Number, required: true },
  author: {
    ref: 'User',
    required: true,
    type: Schema.Types.ObjectId
  },
  subject: { type: String, required: true }

},
{ timestamps: true, });

module.exports = {
  College: mongoose.model('College', collegeSchema),
  Course: mongoose.model('Course', courseSchema),
  Notes: mongoose.model('Notes', notesSchema)
};
