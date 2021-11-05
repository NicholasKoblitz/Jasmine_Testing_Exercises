describe("Tests submitPaymentInfo", function () {

    beforeEach(function () {
        billAmtInput.value = 10;
        tipAmtInput.value = 5;
        submitPaymentInfo();

    })

    it('should be an instance of an object', function () {
        expect(allPayments).toBeInstanceOf(Object);
    })

    it('should add payment info to allPayments', function () {
        expect(allPayments.payment1).toEqual({ billAmt: '10', tipAmt: '5', tipPercent: 50 });
    })

    afterAll(function () {
        paymentTbody.deleteRow(0);
        paymentTbody.deleteRow(0);
        document.querySelector('#summaryTable tbody').deleteRow(0);

    })
})

describe("Tests createCurPayment", function () {

    beforeEach(function () {
        billAmtInput.value = 15;
        tipAmtInput.value = 5;
    })

    it('should return an Object', function () {
        expect(createCurPayment()).toBeInstanceOf(Object);
    })

    it('should contain the values passed into the inputs', function () {
        expect(createCurPayment()).toEqual({ billAmt: '15', tipAmt: '5', tipPercent: 33 });
    })

    afterEach(function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';

    })
})

describe("Tests appendPaymentTable", function () {

    beforeEach(function () {
        appendPaymentTable({ billAmt: 100, tipAmt: 20, tipPercent: 20 });
    })

    it('should append table row to DOM', function () {
        expect(paymentTbody).toBeDefined()
    })

    afterEach(function () {
        paymentTbody.deleteRow(0);
    })
})

describe("Tests updateSummary", function () {

    it('should create a three new table data element', function () {
        expect(summaryTds[0]).toBeDefined();
        expect(summaryTds[1]).toBeDefined();
        expect(summaryTds[2]).toBeDefined();

    })

})