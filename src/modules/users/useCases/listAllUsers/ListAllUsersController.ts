import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const u = {
      user_id: request.headers.user_id as string,
    };

    try {
      const users = this.listAllUsersUseCase.execute(u);

      return response.status(200).json(users);
    } catch (err) {
      return response.status(401).send({
        message: err.message || "Unexpected error.",
      });
    }
  }
}

export { ListAllUsersController };
