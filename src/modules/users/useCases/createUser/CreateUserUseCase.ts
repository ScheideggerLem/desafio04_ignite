import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const userWithEmail = this.usersRepository.findByEmail(email);

    console.log(userWithEmail);

    if (userWithEmail) {
      throw new Error("This email is already registered!");
    }

    return this.usersRepository.create({ name, email });
  }
}

export { CreateUserUseCase };
