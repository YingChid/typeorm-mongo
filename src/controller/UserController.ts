import { getMongoRepository } from "typeorm"
import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { User } from "../entity/User"

export class UserController {

    async all(request: Request, response: Response, next: NextFunction) {
        return await AppDataSource.getMongoRepository(User).find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return await AppDataSource.getMongoRepository(User).findOneBy({
            id: request.params.id
        })
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { firstName, lastName, age } = request.body
        const user = new User(firstName, lastName, age)
        return AppDataSource.getMongoRepository(User).save(user)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        return await AppDataSource.getMongoRepository(User).delete({ id: request.params.id })
    }

}