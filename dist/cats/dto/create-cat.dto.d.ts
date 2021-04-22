import { Cat } from "../interfaces/cats.interface";
export declare class CreateCatDto implements Cat {
    readonly name: string;
    readonly age: number;
    readonly breed: string;
}
