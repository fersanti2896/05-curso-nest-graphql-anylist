import { ArgsType, Field, ID } from '@nestjs/graphql';
import { IsUUID, IsNotEmpty } from 'class-validator';

@ArgsType()
export class IdentificadorArgs {
    @IsNotEmpty()
    @IsUUID('all')
    @Field( () => ID, { description: 'Identificador del item.' } )
    id!: string;
}