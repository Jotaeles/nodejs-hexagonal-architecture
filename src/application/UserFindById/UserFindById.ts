import { User } from "../../domain/User";
import { UserId } from "../../domain/UserId";
import { UserNotFoundError } from "../../domain/UserNotFoundError";
import { UserRepository } from "../../domain/UserRepository";

export class UserFindById {
    constructor(private userRepository: UserRepository) {}
    
    async execute(id: string): Promise<User | null> {
        const user = await this.userRepository.findById(new UserId(id));

        if (!user) throw new UserNotFoundError("User not found");

        return user;
    }
}