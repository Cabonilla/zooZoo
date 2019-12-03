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

const elephantFactory = (name, age, trunkLength) => {
  const trumpet = () => console.log("PHVRRRRRRRRRR!");
  return {name, age, trunkLength, trumpet};
}

const Perry = elephantFactory("Perry", 12, "23 inches");

console.log(Perry.name);
console.log(Perry.age);

Perry.trumpet();

const zebraFactory = (name, age, stripeNumber) => {
  const neigh = () => console.log("NEIGHHH!");
  return {name, age, stripeNumber, neigh};
}

const Jebediah = zebraFactory("Jebediah", 23, 46);

console.log(Jebediah.name);
console.log(Jebediah.stripeNumber);

Jebediah.neigh();

const wildebeestFactory = (name, age, color) => {
  const growl = () => console.log("GROOOOOOOWL!");
  return {name, age, color, growl};
}

const Wilfred = wildebeestFactory("Wilfred", 13, "Dark Brown");

console.log(Wilfred.name);
console.log(Wilfred.color);

Wilfred.growl();

const gazelleFactory = (name, age, furColor) => {
  const meep = () => console.log("MEEP!");
  return {name, age, furColor, meep};
}

const Frank = gazelleFactory("Frank", 11, "Light Brown");

console.log(Frank.name);
console.log(Frank.furColor);

Frank.meep();

const hyenaFactory = (name, age, spotNumber) => {
  const laugh = () => console.log("HAHAHAHAHAHAHHAHAHAHHAHAHHAHA!");
  return {name, age, spotNumber, laugh}
}

const Hennessy = hyenaFactory("Hennessy", 45, 92);

console.log(Hennessy.name);
console.log(Hennessy.age);

Hennessy.laugh();

const hippoFactory = (name, age, weight) => {
  const growl = () => console.log("GRRRRRRRRROWL!");
  return {name, age, weight, growl};
}

const Trinity = hippoFactory("Trinity", 23, "4000 Lb.");

console.log(Trinity.age);
console.log(Trinity.weight);

Trinity.growl();

const leopardFactory = (name, age, spotNumber) => {
  const meow = () => {console.log("MEOW!")}
  return {name, age, spotNumber, meow}
}

const Laremy = leopardFactory("Laremy", 2, 13);

console.log(Laremy.age);
console.log(Laremy.spotNumber);

Laremy.meow();

const addaxFactory = (name, age, hornLength) => {
  const neigh = () => console.log("NEEEEEEEEIGH!");
  return {name, age, hornLength, neigh};
}

const Nadler = addaxFactory("Nadler", 34, "24 Inches");

console.log(Nadler.age);
console.log(Nadler.hornLength);

Nadler.neigh();

const warhogFactory = (name, age, maneThickness) => {
  const oink = () => console.log("OINK!");
  return {name, age, maneThickness, oink};
}

const Salinger = warhogFactory("Salinger", 4, 5);

console.log(Salinger.age);
console.log(Salinger.maneThickness);

Salinger.oink();

const spurfowlFactory = (name, age, greyScale) => {
  const tweet = () => console.log("TWEET TWEET!")
  return {name, age, greyScale, tweet};
}

const Reginald = spurfowlFactory("Reginald", 2, "50%");

console.log(Reginald.age);
console.log(Reginald.greyScale);

Reginald.tweet();

const dungbeetleFactory = (name, age, strengthIndex) => {
  const eatdung = () => console.log("YUM!");
  return {name, age, strengthIndex, eatdung};
}

const Darius = dungbeetleFactory("Darius", 2, "1.7X BW (Body Weight)");

console.log(Darius.name);
console.log(Darius.strengthIndex);

Darius.eatdung();