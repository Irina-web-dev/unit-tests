import {isMysteryReady} from "./10-mystery-ready";

describe("10-mystery-ready", () => {
    it("if mystery object is empty object, it should not be ready", () => {
        expect(isMysteryReady({})).toBe(false)
    })
    
    const validMysteryObject = {
        weapon: "wrench",
        room: "study",
        killer: "mr. green"
    }
   
    it("if mystery object has all information, it should be ready", () => {
        expect(isMysteryReady(validMysteryObject)).toBe(true)
    })

    const emptyStringMystery = {
        weapon: "",
        room: "",
        killer: ""
    }
    it("if mystery object has empty string values, it should not be ready", () => {
        expect(isMysteryReady(emptyStringMystery)).toBe(false)
    })

    const oneUndefinedMystery = {
        weapon: undefined,
        room: "kitchen",
        killer: "mr. john"
    }
    it("if mystery object has any empty values, it should not be ready", () => {
        expect(isMysteryReady(oneUndefinedMystery)).toBe(false)
    })
})