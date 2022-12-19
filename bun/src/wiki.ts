import {strawhatCrewMember} from "./model/strawhat-crew-member.model.js";
import {badGuy} from "./model/bad-guy.model.js";
import {places} from "./model/places.model.js";

const fights: { strawhatMember: strawhatCrewMember, badGuy: badGuy, place: places }[] = [
    {strawhatMember: 'Ruffy', badGuy: 'Do Flamingo', place: 'Dressrosa'},
    {strawhatMember: 'Zorro', badGuy: 'Pacifista', place: 'Thriller Bark'},
    {strawhatMember: 'Sanji', badGuy: 'Queen', place: 'Wano Kuni'},
    {strawhatMember: 'Nami', badGuy: 'Arlong', place: 'Arlong Park'},
    {strawhatMember: 'Ruffy', badGuy: 'Arlong', place: 'Arlong Park'},
]

export function didTheyFight(strawhatMember: strawhatCrewMember, badGuy: badGuy, place: places): boolean {
    return fights.some(fight =>
        fight.strawhatMember === strawhatMember &&
        fight.badGuy === badGuy &&
        fight.place === place
    )
}
