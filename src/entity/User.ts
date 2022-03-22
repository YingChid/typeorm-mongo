import { Entity, ObjectIdColumn, Column, ObjectID } from "typeorm"

@Entity()
export class User {

    @ObjectIdColumn()
    id: ObjectID

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

}
