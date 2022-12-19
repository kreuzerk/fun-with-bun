import {didTheyFight} from "./wiki";

it("should detect that Ruffy fought Do Flamingo on Dressrosa", () => {
    expect(
        didTheyFight('Ruffy', 'Do Flamingo', 'Dressrosa')
    ).toBeTruthy();
});

it("should detect that Ruffy has not fought Arlong on Thriller Bark", () => {
    expect(
        didTheyFight('Ruffy', 'Arlong', 'Thriller Bark')
    ).toBeFalsy();
});
