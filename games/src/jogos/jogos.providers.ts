import { DataSource } from 'typeorm';
import { Jogo } from './entities/jogo.entity';

export const JogosProviders = [
  {
    provide: 'JOGO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Jogo),
    inject: ['DATA_SOURCE'],
  },
];