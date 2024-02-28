import type { CounterSchema } from "./Model/types/counterSchema"
import { counterReducer } from "./Model/slice/counterSlice"
import { Counter } from "./ui/Counter"

export type { CounterSchema }
export { counterReducer, Counter }
