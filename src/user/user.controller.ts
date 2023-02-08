import { Controller, Get } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {
    constructor(private readonly _userService: UserService) {}
    @Get()
    async findAll(){
        return await this._userService.findAll();
    }
}