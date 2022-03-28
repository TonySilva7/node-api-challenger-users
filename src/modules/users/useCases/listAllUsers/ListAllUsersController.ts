import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const userId = request.headers.user_id as string;
    const user = {
      user_id: userId,
    };

    const users = this.listAllUsersUseCase.execute(user);
    const res = users
      ? response.status(200).json(users)
      : response.status(404).json({ message: "You're not admin" });

    return res;
  }
}

export { ListAllUsersController };
