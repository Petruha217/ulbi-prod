import { CounterSchema } from "entities/Counter"
import { UserSchema } from "entities/Users"

interface StateSchema {
  counter: CounterSchema
  user: UserSchema
}

export type { StateSchema }
