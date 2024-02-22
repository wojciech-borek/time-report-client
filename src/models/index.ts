export interface Contractor {
    id: string,
    name: string,
    email: string
}

export interface TimeSpent {
    id: string,
    description: string,
    time: number,
    contractor: Contractor
}