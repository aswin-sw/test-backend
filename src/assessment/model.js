import mongoose from 'mongoose';

const assessmentSchema = mongoose.Schema({}, { strict: false });

class Assessment {
  constructor(assessment) {
    this.Assessment = mongoose.model('assessments', assessmentSchema);
  }

  get(_id) {
    return this.Assessment.findOne({ _id });
  }
}

export default Assessment;
