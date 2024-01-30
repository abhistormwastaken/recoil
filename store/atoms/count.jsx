import { atom } from 'recoil';

// atom for count state variable
export const countAtom = atom({
    key: 'countAtom',
    default: 0
})