import { UserFindAll } from "../application/UserFindAll/UserFindAll";
import { InMemoryUserRepository } from "../infrastructure/InMemoryUserRepository";
import { UserFindById } from "../application/UserFindById/UserFindById";
import { UserCreate } from "../application/UserCreate/UserCreate";
import { UserUpdate } from "../application/UserUpdate/UserUpdate";
import { UserDelete } from "../application/UserDelete/UserDelete";

const userRepository = new InMemoryUserRepository();

export const ServiceContainer = {
  user: {
    findAll: new UserFindAll(userRepository),
    findById: new UserFindById(userRepository),
    create: new UserCreate(userRepository),
    update: new UserUpdate(userRepository),
    delete: new UserDelete(userRepository),
  },
};