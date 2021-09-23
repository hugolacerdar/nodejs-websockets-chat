import { injectable } from "tsyringe";
import { User } from "../schemas/User";
import { ChatRoom } from "../schemas/ChatRoom";
import { ObjectId } from "mongoose";
import { Message } from "../schemas/Message";

@injectable()
class GetMessagesByChatRoomService {
  async execute(roomId: string) {
    const messages = await Message.find({ roomId }).populate("to").exec();

    return messages;
  }
}

export { GetMessagesByChatRoomService };
