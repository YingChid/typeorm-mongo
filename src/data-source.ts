import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "mongodb",
    host: "localhost",
    port: 27017,
    database: "test",
    entities: [__dirname + "/entity/*.ts"],
})
