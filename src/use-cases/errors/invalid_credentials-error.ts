export class InvalidCredentialsError extends Error {
  constructor() {
    super('E-ail already exists.')
  }
}
