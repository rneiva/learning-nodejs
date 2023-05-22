import { Subject } from 'typeorm/persistence/Subject';
import { AppDataSource } from '../database/data-source';

export const subjectRepository = AppDataSource.getRepository(Subject);
