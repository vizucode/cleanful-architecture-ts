import { D_Card } from "../domains/card";

export interface I_Uc_Card {
    FindAll(): Promise<D_Card[]>
    Find(id: number): Promise<D_Card>
    Create(payload: D_Card): Promise<void>
    Update(payload: D_Card): Promise<void>
    Delete(id: number): Promise<void>
}