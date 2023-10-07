import { Injectable } from "@nestjs/common";
import { AuthDto } from "./dto";
import * as argon from "argon2";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) { }

    login(dto: AuthDto) {
        return { msg: "I'm logged in" }
    }

    async register(dto: AuthDto) {
        // generate the password hash
        const hash = await argon.hash(dto.password);
        // save the new user in the db
        const user = await this.prisma.user.create({
            data: {
                email: dto.email,
                hash,
            },
        });
        delete user.hash
        // return the saved user
        return user;
    }
}