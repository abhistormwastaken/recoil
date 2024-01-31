import { atom, selector } from 'recoil';

// atom for count state variable
export const countAtom = atom({
    key: 'countAtom',
    default: 0
})

export const evenSelector = selector({
    key: "evenSelector",
    get: ({get}) => {
        const count = get(countAtom)
        return count % 2 == 0
    }
})