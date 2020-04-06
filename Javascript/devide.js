function divide(a, b) {
    //Add comment for clearance
    if (b === 0) {
        throw new DOMException("Can not divide for 0");
    }
    return a / b;
}
