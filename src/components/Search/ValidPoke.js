const noRepeat = (team, poke) => {
  if (team.some((member) => member.id === poke.id)) {
    return false;
  }
  return true;
};

const validAligment = (team, poke) => {
  const pokeAligment = poke.types;
  if (pokeAligment === "generation") {
    return false;
  } else {
    const teamAligment = team.filter((member) => member.types === pokeAligment);
    if (teamAligment.length >= 3) {
      return false;
    }
    return true;
  }
};

export { noRepeat, validAligment };
