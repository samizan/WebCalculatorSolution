/// <reference path="_references.js" />

(function () {
    this.calculatorNamespace = this.calculatorNamespace || {};
    var ns = this.calculatorNamespace;

     ns.initialize = function () {
         var calculator = new ns.Calculator();

        $('button[id^="btnNumber"]').on('click', calculator.numberClick);
        $('#btnPlus').on('click', calculator.operatorClick("+"));
        $('#btnMinus').on('click', calculator.operatorClick("-"));
        $('#btnDivide').on('click', calculator.operatorClick("/"));
        $('#btnMultiply').on('click', calculator.operatorClick("*"));
        $('#btnEqual').on('click', calculator.equalClick);
        $('#btnClearEntry').on('click', calculator.clearEntry);
        $('#btnClear').on('click', calculator.clear);
        calculator.clear();
    }

    ns.Calculator = (function () {
        var operation = "";
        var lastOperation = "";

        function Calculator() {
        }

        Calculator.prototype.clear = function () {
            $('#txtInput').val('0');
            $('#txtResult').val('0');
        }

        Calculator.prototype.numberClick = function () {
             $('#txtInput').val($('#txtInput').val() == '0' ?
                 $(this).text() : $('#txtInput').val() + $(this).text());
        }

        Calculator.prototype.operatorClick = function (calledOperation) {
             return function () {

                 if (operation != calledOperation && operation != "") {
                     Calculator.prototype.runPreviousOperator(operation);
                 }
                 operation = calledOperation;
                 selectOperation();
             }
         }


        Calculator.prototype.clearEntry = function() {
            $('#txtInput').val('0');
        }

        Calculator.prototype.clearClick = function() {
            $('#txtResult').val('0');
            Calculator.prototype.clearEntry();
        }

        Calculator.prototype.runPreviousOperator = function () {
            selectOperation();
        }

        Calculator.prototype.equalClick = function () {
            lastOperation = "=";
            selectOperation();
            
        }

        function selectOperation() {
            switch (operation) {
                case "+": Calculator.prototype.addNumbers();
                    break;
                case "-": Calculator.prototype.subtractNumbers();
                    break;
                case "/": Calculator.prototype.divideNumbers();
                    break;
                case "*": Calculator.prototype.multiplyNumbers();
                    break;
            }

            Calculator.prototype.clearEntry();
        }

        Calculator.prototype.addNumbers = function () {
            $('#txtResult').val(Number($('#txtResult').val()) +
               Number($('#txtInput').val()));
        }

        Calculator.prototype.subtractNumbers = function () {
            $('#txtResult').val(Number($('#txtResult').val()) -
               Number($('#txtInput').val()));
        }

        Calculator.prototype.divideNumbers = function () {
            if ($('#txtInput').val() == "0" && lastOperation == "=") return;

            var result = $('#txtResult').val();

            if ($('#txtResult').val() == 0) {
                $('#txtResult').val(Number($('#txtInput').val()));
            }
            else {
                $('#txtResult').val(result / $('#txtInput').val());
            }
        }

        Calculator.prototype.multiplyNumbers = function () {
            if ($('#txtInput').val() == "0" && lastOperation == "=") return;

            var result = $('#txtResult').val();

            if ($('#txtResult').val() == 0) {
                $('#txtResult').val(Number($('#txtInput').val()));
            }
            else {
                $('#txtResult').val(result * $('#txtInput').val());
            }
        }

        return Calculator;
    }());

})();
