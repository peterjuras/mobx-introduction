const mobx_alone = require("./mobx-alone")
// @ponicode
describe("mobx_alone.printAd", () => {
    test("0", () => {
        let callFunction = () => {
            mobx_alone.printAd()
        }
    
        expect(callFunction).not.toThrow()
    })
})
