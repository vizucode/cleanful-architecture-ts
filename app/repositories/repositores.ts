import { M_Card } from "../models/card"

export interface I_Repo_Card {
    FindAll(): Promise<M_Card[]>
    Find(id: number): Promise<M_Card>
    Create(payload: M_Card): Promise<void>
    Update(payload: M_Card): Promise<void>
    Delete(id: number): Promise<void>
}