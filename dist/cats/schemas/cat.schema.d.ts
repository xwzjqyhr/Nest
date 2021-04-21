import { Document } from 'mongoose';
export declare type CatDocument = Cat & Document;
export declare class Cat extends Document {
    name: string;
    age: number;
    breed: string;
}
export declare const CatSchema: import("mongoose").Schema<Cat, import("mongoose").Model<any, any>, undefined>;
