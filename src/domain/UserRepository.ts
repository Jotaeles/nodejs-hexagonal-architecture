import { User } from "./User";
import { UserId } from "./UserId";

export interface UserRepository {
    create(user: User): Promise<void>;
    findAll(): Promise<User[]>;
    findById(id: UserId): Promise<User | null>;
    update(user: User): Promise<void>;
    delete(id: UserId): Promise<void>;
}