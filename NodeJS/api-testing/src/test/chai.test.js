import { assert, expect, should } from "chai";

// console.log('assert: ', assert);
// console.log('should: ', should());
//********************assert 
describe(`aspect test`, () => {
    const userName = "yellow"
    it(`checks string`, () => {
        assert.typeOf(userName, `string`)
    })
    it(`checks equal`, () => {
        assert.equal(userName, `yellow`)
    })
})

//********************should
// should be is not available in new verion.
describe('should', () => {
    ;
    const mylist = {
        item: [{ id: 1, name: "demo" }],
        title: "user name"
    }
    const userName = `ninad`
    // it(`should check`, ()=>{
    //     userName.should.equal(`ninad`)
    // })

})

//********************should
describe(`check expect`, () => {
    const mylist = {
        item: [{ id: 1, name: `demo` }],
        title: `user name`,
        address: {
            country: `India`,
            phoneNo: [`21233223`, `1231232131`]
        }
    }
    const userName = `ninad`
    it(`string match`, () => {
        expect(userName).to.be.a(`string`)
    })
    it(`length match`, () => {
        expect(mylist.item).to.lengthOf(1)
    })
    it(`object keys match`, () => {
        expect(mylist).to.have.all.keys(`item`, `title`, `address`,)
    })
    it(`phone no available`, () => {
        expect(mylist).to.have.nested.property( `address.phoneNo[0]`)
    })
    it(`country name should be India`, () => {
        expect(mylist).to.have.nested.include({"address.country":"India"})
    })
})