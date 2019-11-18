QUnit.test("test string rong", function (assert) {
    let number= 0;
    let actual = 1;
    let expected = add(number);
    assert.equal(actual, expected, "Passed!");
});
QUnit.test("test string rong", function (assert) {
    let number= "";
    let actual = "";
    let expected = add(number);
    assert.equal(actual, expected, "Passed!");
});