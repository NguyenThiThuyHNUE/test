QUnit.test( "fizz-test", function( assert ) {
    let number =3;
    let actualAnswer = fizzbuzz(number);
    let expected = "fizz";

    assert.equal( actualAnswer, expected);
});
QUnit.test( "buzz-test", function( assert ) {
    let number =5;
    let actualAnswer = fizzbuzz(number);
    let expected = "buzz";

    assert.equal( actualAnswer, expected);
});
QUnit.test( "fizz-buzz-test", function( assert ) {
    let number =15;
    let actualAnswer = fizzbuzz(number);
    let expected = "fizzbuzz";

    assert.equal( actualAnswer, expected);
});
QUnit.test( "fizz-buzz-test", function( assert ) {
    let number =11;
    let actualAnswer = fizzbuzz(number);
    let expected = "11";

    assert.equal( actualAnswer, expected);
});