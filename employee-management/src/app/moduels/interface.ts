
export interface IEmployee{
    _id: string,
    name: string,
    age: number,
    position: string,
}

export interface IList{
    list?:IEmployee[],
    message?:string
}