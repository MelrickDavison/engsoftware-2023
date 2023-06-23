const assert = require("assert");
const { soma, sub, mult, div } = require("../src/math");

describe("Math", function() {
    describe("Soma()", function() {
        it("Deve retornar  a soma de dois números", function() {
            assert.strictEqual(soma(2,3),5);
            assert.strictEqual(soma(-1,5),4);
            assert.strictEqual(soma(0,0),0);
        });
    })

    describe("sub()", function(){
        it("Deve retornar a subtração de dois números", function(){
            assert.strictEqual(sub(2,3),-1);
            assert.strictEqual(sub(-1,5),-6);
            assert.strictEqual(sub(0,0),0);
        })
    });

    describe("mult()", function(){
        it("Deve retornar a multiplicação de dois números", function(){
            assert.strictEqual(mult(2,3), 6);
        });
    });

    describe("div()", function(){
        it("Deve retornar a divisão de dois números", function(){
            assert.strictEqual(div(3, 3), 1);
        });
    });
});



