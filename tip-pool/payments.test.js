describe("Tests submitPaymentInfo", function () {

    beforeEach(function () {

    })

    it('should update paymentId', function () {
        // expect(submitPaymentInfo()).to
    })
})

describe("Tests createCurPayment", function () {

    beforeEach(function () {
        billAmtInput.value = 10;
        tipAmtInput.value = 5;
    })

    it('should return an Object', function () {
        expect(createCurPayment()).toBeInstanceOf(Object);
    })

    it('should contain the values passed into the inputs', function () {
        expect(createCurPayment()).toEqual({ billAmt: '10', tipAmt: '5', tipPercent: 50 });
    })

    afterEach(function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
    })
})

describe("Tests appendPaymentTable", function () {

    it('')
})

describe("Tests updateSummary", function () {
    let test;
    beforeEach(function () {
        test = jasmine.createSpyObj('test', ['updateSummary']);
        test.updateSummary();
    })

    it('test', function () {
        expect(test.updateSummary).toBeDefined();
    })
})