/// <reference path="_references.js" />

module('Calculator Test Suite', {
    setup: function () {
        calculatorNamespace.initialize();
    }
});

test("Initialize Test", function () {
    expect(2);
    var expected = '0';
    equal($('#txtInput').val(), expected, 'Expected value: ' + expected + ' Actual value: ' + $('#txtInput').val());
    equal($('#txtResult').val(), expected, 'Expected value: ' + expected + ' Actual value: ' + $('#txtResult').val());
});

test("Button Click Test", function () {
    var buttonQuantity = 10;
    expect(buttonQuantity * 2);
    for (var i = 0; i < buttonQuantity ; i++) {
        $('#btnNumber' + i).triggerHandler('click');
        var result = $('#txtInput').val()[$('#txtInput').val().length - 1];
        var expected = String(i);
        equal(result, expected, 'Expected value: ' + expected + ' Actual value: ' + result);
        var expectedLength = i < 2 ? 1 : i;
        equal($('#txtInput').val().length, expectedLength,
            'Expected String Length: ' + expectedLength,
            'Actual value: ' + $('#txtInput').val().length);
    }
});

test("Add Test", function () {
    expect(2);
    var btnPlus = document.getElementById('btnPlus');
    txtInput.value = '10';
    txtResult.value = '20';
    QUnit.triggerEvent(btnPlus, "click");
    var expected = "30";
    equal(txtResult.value, expected, 'Expected value: ' + expected + ' Actual value: ' + txtResult.value);
    expected = '0';
    equal(txtInput.value, expected, 'Expected value: ' + expected + ' Actual value: ' + txtInput.value);

});

test("Minus Test", function () {
    expect(2);
    var btnMinus = document.getElementById('btnMinus');
    txtInput.value = '10';
    txtResult.value = '20';
    QUnit.triggerEvent(btnMinus, "click");
    var expected = "10";
    equal(txtResult.value, expected, 'Expected value: ' + expected + ' Actual value: ' + txtResult.value);
    expected = '0';
    equal(txtInput.value, expected, 'Expected value: ' + expected + ' Actual value: ' + txtInput.value);
});

test("Clear Entry Test", function () {
    expect(1);
    var btnClearEntry = document.getElementById('btnClearEntry');
    txtInput.value = '10';
    QUnit.triggerEvent(btnClearEntry, "click");
    var expected = "0";
    equal(txtInput.value, expected, 'Expected value: ' + expected + ' Actual value: ' + txtInput.value);
});

test("Clear Test", function () {
    expect(2);
    var btnClear = document.getElementById('btnClear');
    txtInput.value = '10';
    txtResult.value = '20';
    QUnit.triggerEvent(btnClear, "click");
    var expected = "0";
    equal(txtResult.value, expected, 'Expected value: ' + expected + ' Actual value: ' + txtResult.value);
    equal(txtInput.value, expected, 'Expected value: ' + expected + ' Actual value: ' + txtInput.value);
});