function divide(a, b) {
    //another comment
    if (b === 0) {
        throw new DOMException("Can not divide for 0");
    }
    return a / b;
}