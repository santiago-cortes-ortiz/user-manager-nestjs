import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { User } from "./model/user.model";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {
    constructor(private readonly _userService: UserService) {}
    @Get()
    async findAll(){
        return await this._userService.findAll();
    }
    
    @Get(':id')
    async findById( @Param() id: number){
        return await this._userService.findById(id);
    }

    @Post()
    async create(@Body() user: User){
        return await this._userService.save(user);
    }

    @Delete(':id')
    async delete(@Param() id: number){
        await this._userService.delete(id);
    }
}