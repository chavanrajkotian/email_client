export interface UserNameResponse{
    available: boolean
  }
  
  export interface SignUpResponse{
    username: string
  }
  
  export interface SignedInResponse{
    authenticated: boolean,
    username: string
  }
  
  export interface SignInResponse{
    username: string,
    password: string
  }