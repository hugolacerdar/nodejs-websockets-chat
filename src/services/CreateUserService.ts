import { injectable } from "tsyringe";
import { User } from "../schemas/User";

interface ICreateUserDTO {
  email: string;
  socket_id: string;
  name: string;
  avatar: string;
}

@injectable()
class CreateUserService {
  async execute({ email, socket_id, name, avatar }: ICreateUserDTO) {
    const userExists = await User.findOne({
      email,
    }).exec();

    if (userExists) {
      const user = await User.findOneAndUpdate(
        {
          _id: userExists.id,
        },
        {
          $set: { socket_id, avatar, name },
        },
        {
          new: true,
        }
      );

      return user;
    }

    const user = await User.create({
      email,
      socket_id,
      avatar,
      name,
    });

    return user;
  }
}

export { CreateUserService };
