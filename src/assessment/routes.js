import { Router } from 'express';
import Assessment from './model';
import { errorHandler } from '../utils/responseHandler';

const router = Router();

router.get('/:id', async (req, res) => {
  try {
    let assessment = new Assessment();
    let result = await assessment.get(req.params.id);
    if (!result) throw new Error('invalid assessment id');
    res.send(result);
  } catch (e) {
    console.log('error', e);
    res.status(400).send({ message: 'invalid assessment id' });
  }
});

export default router;
