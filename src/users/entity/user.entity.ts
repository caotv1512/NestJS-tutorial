import { ApiProperty } from "@nestjs/swagger";

export class Users{
    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string
}