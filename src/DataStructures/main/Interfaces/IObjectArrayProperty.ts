import {ITypedArray} from "../Array/ITypedArray";
export interface IObjectArrayProperty {
    name: string;
    type: new (size:number) => ITypedArray;
}