import { injectable } from "tsyringe";
import { User } from "../schemas/User";
import { ChatRoom } from "../schemas/ChatRoom";
import { ObjectId } from "mongoose";

@injectable()
class GetChatRoomByIdService {
  async execute(idChatRoom: string) {
    const room = await ChatRoom.findOne({
      idChatRoom,
    })
      .populate("idUsers")
      .exec();

    return room;
  }
}

export { GetChatRoomByIdService };
