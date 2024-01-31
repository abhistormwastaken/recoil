import { atom, selector } from 'recoil';

// atom for count state variable
export const countAtom = atom({
    key: 'countAtom',
    default: 0
})

export const evenSelector = selector({
    key: "evenSelector",
    // in get function we have access to various atoms and can return a new value which depends on these atoms by doing some logic
    get: ({get}) => {
        const count = get(countAtom)
        return count % 2 == 0
    }
})