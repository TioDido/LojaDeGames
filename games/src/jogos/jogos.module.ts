import { Module } from '@nestjs/common';
import { JogosService } from './jogos.service';
import { JogosController } from './jogos.controller';
import { DatabaseModule } from 'src/database/database.module';
import { JogosProviders } from './jogos.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [JogosController],
  providers: [JogosService,
  ...JogosProviders]
})
export class JogosModule {}
