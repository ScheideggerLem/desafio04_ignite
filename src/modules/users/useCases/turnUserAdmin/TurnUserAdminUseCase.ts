import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ user_id }: IRequest): Promise<User> {
    return new Promise((resolve, reject) => {
      const user = this.usersRepository.findById(user_id);
      if (!user) {
        reject(Error("This user does not exist."));
      }

      resolve(this.usersRepository.turnAdmin(user));
    });
  }
}

export { TurnUserAdminUseCase };
