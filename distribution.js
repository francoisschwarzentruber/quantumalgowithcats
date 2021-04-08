/**
 * contains elements with their probabilities
 */
class Distribution {
  probabilities = [];
  elements = [];

  push(element, probability) {
    const l = this.elements.length;
    this.elements[l] = element;
    this.probabilities[l] = probability;
  }

  peekRandom() {
    const r = Math.random();
    let sum = 0;
    for (let i = 0; i < this.elements.length; i++) {
      sum = sum + this.probabilities[i];
      if (r < sum)
        return this.elements[i];
    }
    throw "error";
  }
}
