describe("Helpers Tests (sumPaymentTotal)", function () {

    it('should return the total', function () {
        expect(sumPaymentTotal(100)).toBe(0);
    })

    it('should return an instance of Number', function () {
        expect(sumPaymentTotal(100)).toBeInstanceOf(Number);
    })

})

describe("Helper Tests (CalculateTipPrecent)", function () {
    it('should return the percentage as a decimal', function () {
        expect(calculateTipPercent(100, 2)).toBeCloseTo(2.00);
    })

    it('should return the amount as a number', function () {
        expect(calculateTipPercent(100, 2)).toBeInstanceOf(Number);
    })

})

describe("Helper Tests (appendTd)", function () {

    beforeEach(function () {
        serverNameInput.value = "Nick";
    })

    it('should append a td element to a tr', function () {
        appendTd(document.createElement('tr'), "2");
        // let newTd = document.createElement('td');
        // expect(appendTd, (document.createElement('tr'), "2")).toEqual()
        expect(document.querySelector("#server1 td")).toEqual("Nick");
    })
})