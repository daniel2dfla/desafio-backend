import { DeleteDto } from "src/auth/dto/delete-dto";
import { LoginDto } from "src/auth/dto/login.dto";
import { SignupDto } from "src/auth/dto/signup.dto";
import { User } from "src/abstractions/schemas/user.schema";

export abstract class IUserRepository {
    abstract getAll(): Promise<User[]>
    abstract signup(signUpDto: SignupDto): Promise<User>
    abstract login(loginDto: LoginDto): Promise<User>
    abstract delete(deleteDto: DeleteDto): Promise<void>
    abstract deleteAll(): Promise<void>
}