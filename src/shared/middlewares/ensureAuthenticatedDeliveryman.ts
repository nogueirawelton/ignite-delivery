import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { auth } from "../../config/auth";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticatedDeliveryman(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({
      message: "Token Missing!"
    })
  }
  const [, token] = authHeader.split(" ");

  try {
    const { sub } = verify(token, auth.secret_token_deliveryman) as IPayload;
    
    request.id_deliveryman = sub;
    
    return next();
  } catch (err) {
    return response.status(401).json({
      message: "Invalid Token!"
    })
  }
}