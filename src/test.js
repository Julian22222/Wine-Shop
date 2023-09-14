var creatures = [
  { name: "Shark", habitat: "Ocean" },
  { name: "Whale", habitat: "Ocean" },
  { name: "Lion", habitat: "Savanna" },
  { name: "Monkey", habitat: "Jungle" },
];

const aquaticCreatures = creatures.filter((creature) => {
  return creature.habitat == "Ocean";
});

console.log(aquaticCreatures);
