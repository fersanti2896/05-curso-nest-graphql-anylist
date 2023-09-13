import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateItemInput, UpdateItemInput } from './dto/inputs';
import { Item } from './entities/item.entity';
import { IdentificadorArgs } from './dto/args';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository( Item )
    private readonly itemsRepository: Repository<Item>
  ) {}

  async create(createItemInput: CreateItemInput): Promise<Item> {
    const newItem = this.itemsRepository.create( createItemInput );
    
    return await this.itemsRepository.save( newItem );
  }

  async findAll(): Promise<Item[]> {
    // TODO: Filtrar, paginar, por usuario

    return this.itemsRepository.find();
  }

  async findOne( id: IdentificadorArgs ): Promise<Item> {
    const item = await this.itemsRepository.findOneBy(id);

    if( !item ) throw new NotFoundException(`El item con el id: ${ id.id } no fue encontrado.`);

    return item;
  }

  update(id: number, updateItemInput: UpdateItemInput) {
    return `This action updates a #${id} item`;
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
}
