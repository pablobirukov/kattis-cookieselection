import * as fs from "fs";
import { range } from "lodash";

import cookieSelection from "./cookieSelection";

let mock: string[];

let output: string[] = []
const setMock = (mockData: string[]): void => {
    mock = mockData;
    let mockIndex = 0;
    (window as any).readline = () => {
        return mock[mockIndex++];
    }
    output = [];
    (window as any).print = (value: any) => {
        output.push(value.toString());
    }
}

describe("cookieselection", () => {
    test("1", () => {
        const input = fs.readFileSync('./test/test1.in.txt').toString().split('\n');
        const answer = fs.readFileSync('./test/test1.out.txt').toString().split('\n');
        setMock(input);
        cookieSelection();
        expect(output).toEqual(answer);
    });

    test("2", () => {
        const input = fs.readFileSync('./test/test2.in.txt').toString().split('\n');
        const answer = fs.readFileSync('./test/test2.out.txt').toString().split('\n');
        setMock(input);
        cookieSelection();
        expect(output).toEqual(answer);
    });

    test("3", () => {
        const input = fs.readFileSync('./test/test3.in.txt').toString().split('\n');
        const answer = fs.readFileSync('./test/test3.out.txt').toString().split('\n');
        setMock(input);
        cookieSelection();
        expect(output).toEqual(answer);
    });
});
