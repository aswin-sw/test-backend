import { Router } from 'express';
import Assessment from './model';
import Questions from '../question/model';
import { errorHandler } from '../utils/responseHandler';

const router = Router();

router.get('/:id', async (req, res) => {
  try {
    let assessment = new Assessment();
    let questions = new Questions();
    let result = await assessment.get(req.params.id);
    if (!result) throw new Error('invalid assessment id');
    result = result._doc;
    let qids = result.questionsApiActivity.questions;
    let allQuestions = await questions.getQuestions(qids);
    result.questionsApiActivity.questions = allQuestions;
    res.send(result);
  } catch (e) {
    console.log('error', e);
    res.status(400).send({ message: 'invalid assessment id' });
  }
});

export default router;
