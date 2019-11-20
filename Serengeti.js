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

const rhinocerosFactory = (name, age, hornLength) => {
  const roar = () => console.log("ROAR!");
  return {name, age, hornLength, roar};
}

const Rind = rhinocerosFactory("Rind", 12, "1.3 meters");

console.log(Rind.hornLength);
console.log(Rind.age);

Rind.roar();

const lionFactory = (name, age, maneSize) => {
  const roar = () => console.log("ROAR!")
  return {name, age, maneSize, roar};
} 

const Larry = lionFactory("Larry", 9, "1ft Radius");

console.log(Larry.age);
console.log(Larry.name);

Larry.roar();

const cheetahFactory = (name, age, spotNumber) => {
  const growl = () => console.log("GROWL!");
  return {name, age, spotNumber, growl};
}

const Chauncy = cheetahFactory("Chauncy", 32, 44);

console.log(Chauncy.name);
console.log(Chauncy.age);

Chauncy.growl();