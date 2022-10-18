import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateJogoDto } from './dto/create-jogo.dto';
import { UpdateJogoDto } from './dto/update-jogo.dto';
import { Jogo } from './entities/jogo.entity';
import {Inject} from '@nestjs/common';
import {Repository} from 'typeorm'

@Injectable()
export class JogosService {
  constructor(@Inject('JOGO_REPOSITORY')
  private jogoRepository: Repository<Jogo>){}
  
  private Jogos: Jogo[] = [];
  create(createJogoDto: CreateJogoDto){
    const AtualIdMaximo = this.Jogos[this.Jogos.length - 1]?.id || 0;
    const id=AtualIdMaximo + 1;
    const jogo  = {
      id,
      ...createJogoDto,
    }
    this.Jogos.push(jogo)
    return jogo;
  }

  findAll() {
    return this.Jogos;
  }

  findOne(id: number) {
    const index = this.Jogos.findIndex((jogos) => jogos.id === id);
    return this.Jogos[index];
  }

  update(id: number, updateJogoDto: UpdateJogoDto) {
    const jogo = this.findOne(id);
    const newJogo = {
      ...jogo,
      ...updateJogoDto,
    };
    const index = this.Jogos.findIndex((jogos) => jogos.id === id);
    this.Jogos[index] = newJogo;
    return newJogo;
  }

  remove(id: number) {
    const index = this.Jogos.findIndex((jogos) => jogos.id === id )
    if (index === -1){
      throw new NotFoundException("Jogo não encontrado!");
    }
    this.Jogos.splice(index, 1);
  }
}
