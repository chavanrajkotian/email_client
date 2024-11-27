export interface UserNameResponse{
    available: boolean
}

export interface signUpPayload{
    username: string,
    password: string,
    passwordConfirmation: string
  }

export interface SignUpResponse{
    username: string
}