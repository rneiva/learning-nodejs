import { Request, Response } from 'express';
import { subjectRepository } from '../respositories/subjectRepository';

export class SubjectController {
  async create(req: Request, res: Response) {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({
        error: 'Missing name',
      });
    }
    try {
      const newSubject = subjectRepository.create({ name });

      await subjectRepository.save(newSubject);

      return res.status(201).json(newSubject);
    } catch (err) {
      return res.status(500).json({
        error: 'Internal server error',
      });
    }
  }
}
