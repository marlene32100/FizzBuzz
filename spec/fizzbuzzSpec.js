describe ("fizzBuzz", function(){

    beforeEach(function (){
        fizzbuzz = new fizzBuzz
    });

    describe("Check number", function(){
        it("should return FizzBuzz", function(){
            let value = fizzBuzz(15)
            expect(value).toBe("FizzBuzz")
        });
        it("should return Fizz", function(){
            let value = fizzBuzz(9)
            expect(value).toBe("Fizz")
        });
        it("should return Buzz", function(){
            let value = fizzBuzz(25)
            expect(value).toBe("Buzz")
        });
        it("should return number", function(){
            let value = fizzBuzz(88)
            expect(value).toBe(88)
        });
    });

});