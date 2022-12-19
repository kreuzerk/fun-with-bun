import { test, expect } from "bun:test";

import {didTheyFight} from "./wiki.js";

test("should detect that Ruffy fought Do Flamingo on Dressrosa", () => {
    expect(
        didTheyFight('Ruffy', 'Do Flamingo', 'Dressrosa')
    ).toBeTruthy();
});

test("should detect that Ruffy has not fought Arlong on Thriller Bark", () => {
    expect(
        didTheyFight('Ruffy', 'Arlong', 'Thriller Bark')
    ).toBeFalsy();
});
