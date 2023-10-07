import { Injectable } from "@nestjs/common";
import { AuthDto } from "./dto";

@Injectable()
export class AuthService {
    login(dto: AuthDto){
        return {msg: "I'm logged in"}
    }

    register(dto: AuthDto){
        return {msg: "I'm registered"}
    }
}