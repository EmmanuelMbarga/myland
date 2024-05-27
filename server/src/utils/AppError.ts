export default class AppError extends Error {
  public statusCode: number;
  public isOperational: boolean;

  constructor(message: string, statusCode: number, isOperational: boolean) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;

    // Maintenir le prototype chain pour les instances héritées de Error
    Object.setPrototypeOf(this, new.target.prototype);

    // Capturer la trace de la pile pour une meilleure débogage
    Error.captureStackTrace(this, this.constructor);

  }
}
