import { UserNotFoundError } from "../../domain/UserNotFoundError";
import { UserId } from "../../domain/UserId";
import { UserRepository } from "../../domain/UserRepository";

export class UserDelete {
    constructor(private userRepository: UserRepository) {}

    async execute(id: string): Promise<void> {

        const userId = new UserId(id);

        const userExists = await this.userRepository.findById(userId);

        if (!userExists) throw new UserNotFoundError("User not found");

        return this.userRepository.delete(userId);
    }
}