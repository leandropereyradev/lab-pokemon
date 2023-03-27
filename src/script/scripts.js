export const getColor = (type) => {
  let color;

  switch (type) {
    case "Grass":
      color = "#78C850";
      break;
    case "Poison":
      color = "#A040A0";
      break;
    case "Fire":
      color = "#F08030";
      break;
    case "Flying":
      color = "#A890F0";
      break;
    case "Water":
      color = "#6890F0";
      break;
    case "Bug":
      color = "#A8B820";
      break;
    case "Normal":
      color = "#A8A878";
      break;
    case "Electric":
      color = "#F8D030";
      break;
    case "Ground":
      color = "#E0C068";
      break;
    case "Fairy":
      color = "#EE99AC";
      break;
    case "Fighting":
      color = "#C03028";
      break;
    case "Psychic":
      color = "#F85888";
      break;
    case "Rock":
      color = "#F85888";
      break;
    case "Steel":
      color = "#F85888";
      break;
    case "Ice":
      color = "#98D8D8";
      break;
    case "Ghost":
      color = "#705898";
      break;
    case "Dragon":
      color = "#7038F8";
      break;
    case "Dark":
      color = "#705848";
      break;

    default:
      break;
  }

  return color;
};

export const onTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const getGradient = (pkm, type) => {
  const gradientCard = {
    background: `linear-gradient(rgba(0, 0, 0, 1) 20%, ${getColor(
      pkm.type[0]
    )} 250%)`,
  };

  const gradientModal = {
    background: `linear-gradient(90deg, ${getColor(pkm.type[0])}
    -300%, rgba(0, 0, 0, 0.8) 50%, ${
      pkm.type[1] ? getColor(pkm.type[1]) : getColor(pkm.type[0])
    } 400%)`,
  };

  if (type === "modal") return gradientModal;
  if (type === "card") return gradientCard;
};
