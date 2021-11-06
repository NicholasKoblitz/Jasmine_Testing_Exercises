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

describe("Helper Tests (appendTd and appendDeleteBtn)", function () {

    beforeEach(function () {
        serverNameInput.value = 'Nick';
        submitServerInfo();
        console.dir(serverTbody)
    })

    it('should append a td element to a tr', function () {
        expect(serverTbody.childNodes[0].childNodes[0].innerText).toEqual('Nick');
    })

    it('should be part of serverTbody', function () {
        expect(serverTbody.childNodes[0].childNodes[2].innerText).toEqual('X')
    })

    afterAll(function () {
        serverTbody.deleteRow(0);
        serverNameInput.value = '';
        serverTbody.removeChild(serverTbody.childNodes[0]);


    })
})
