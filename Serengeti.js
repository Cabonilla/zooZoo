const meerkatFactory = (name, age, hole) => {
	const pip = () => console.log("PIP!");
  return {name, age, hole, pip};
}

const Lucy = meerkatFactory("Lucy", 12, "Hole 13");

console.log(Lucy.age);
console.log("My whole is", Lucy.hole);

Lucy.pip();

const monkeyFactory = (name, age, furColor) => {
    const oohOoh = () => console.log("OOHOOH!");
    return {name, age, furColor, oohOoh};
}

const Jerry = ("Jerry", 32, "Light Brown");

console.log(Jerry.furColor);

Jerry.oohOoh();