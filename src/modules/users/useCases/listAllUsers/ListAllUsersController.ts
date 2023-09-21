import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const user_id = String(request.headers.user_id);
    try {
      return response
        .status(200)
        .json(this.listAllUsersUseCase.execute({ user_id }));
    } catch (e) {
      return response
        .status(400)
        .json({ error: "This user does not have admin permissions." });
    }
  }
}

export { ListAllUsersController };
