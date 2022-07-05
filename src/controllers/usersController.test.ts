import { Request } from "express";
import { makeMockResponse } from "../mocks/mockResponse";
import { UsersController } from "./usersController";

describe("Users Controller", () => {
  const usersController = new UsersController();

  const mockRequest = {} as Request;
  const mockResponse = makeMockResponse();

  it("List Users", () => {
    usersController.getUsers(mockRequest, mockResponse);
    // Espera sucesso na requsição
    expect(mockResponse.state.status).toBe(200);
    expect(mockResponse.state.json).toHaveLength(1);
  });

  it("Create User", () => {
    mockRequest.body = {
      name: "new user",
    };

    usersController.createUser(mockRequest, mockResponse);

    expect(mockResponse.state.status).toBe(201);
    expect(mockResponse.state.json).toMatchObject({
      mensagem: `Usuário new user criado com sucesso`,
    });
  });

  it("No empty user", () => {
    mockRequest.body = {
      name: "",
    };

    usersController.createUser(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(403);
    expect(mockResponse.state.json).toMatchObject({
      error: "Name is required",
    });
  });
});
