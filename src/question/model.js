import mongoose from 'mongoose';

const questionSchema = mongoose.Schema({}, { strict: false });

class Question {
  constructor(question) {
    this.Question = mongoose.model('questions', questionSchema);
  }

  getQuestions(qids) {
    return this.Question.find(
      {
        _id: { $in: qids }
      },
      { answer: 0 }
    );
  }
}

export default Question;
