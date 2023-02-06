import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./model/user.model";

@Injectable()
export class UserService{
    constructor(
        @InjectRepository(User) 
        private _userRepository: Repository<User>
    ) {}

    findAll(): Promise<User[]>{
        return this._userRepository.find();
    }

    findById(id: number): Promise<User> {
        return this._userRepository.findOneBy({id});
    }

    save(user: User): Promise<User> {
        return this._userRepository.save(user);
    }

    async delete(id: number): Promise<void> {
        await this._userRepository.delete(id);
    }

}