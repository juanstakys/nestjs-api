import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {
    login(){
        return {msg: "I'm logged in"}
    }

    register(){
        return {msg: "I'm registered"}
    }
}