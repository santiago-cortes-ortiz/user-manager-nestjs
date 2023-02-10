import { Controller, Get, Param } from "@nestjs/common";
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
}