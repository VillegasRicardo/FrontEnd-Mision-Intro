const fetchPokemon = () => {
  const pokeNameInput = document.getElementById("pokeName");
  let pokeName = pokeNameInput.value;
  pokeName = pokeName.toLowerCase();
  const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
  fetch(url).then((res) => {
    if (res.status != "200") {
      console.log(res);
      pokeImage("./pokemon-sad.gif")
    }
    else {
      return res.json();
    }
  }).then((data) => {
    if (data) {

      const fill = (number, len) => "0".repeat(len - number.toString().length) + number.toString();

      //IMAGEN
      let pokeImg = data.sprites.front_default;
      //NOMBRE
      let pokeNom = data.species.name;
      //NUMERO
      let pokeNum = fill(data.id, 3);
      //TIPO
      let pokeTip = "";
      for (var i = 0; i < data.types.length; i++) {
        pokeTip += data.types[i].type.name + ",";
      }
      pokeTip = pokeTip.substring(0, pokeTip.length - 1);
      //HABILIDADES
      let pokeHab = "";
      for (var i = 0; i < data.abilities.length; i++) {
        pokeHab += data.abilities[i].ability.name + ",";
      }
      pokeHab = pokeHab.substring(0, pokeHab.length - 1);
      //MOVIMIENTOS
      let pokeMov = "";
      for (var i = 0; i < data.moves.length; i++) {
        pokeMov += data.moves[i].move.name + ",";
      }
      pokeMov = pokeMov.substring(0, pokeMov.length - 1);
      //PESO Y ALTURA
      let pokeAltura = data.height;
      let pokePeso = data.weight;
      //DATOS
      let pokeDatos = "";
      for (var i = 0; i < data.stats.length; i++) {
        pokeDatos += data.stats[i].stat.name +": "+ data.stats[i].base_stat  + ",";
      }
      pokeDatos = pokeDatos.substring(0, pokeDatos.length - 1);

      //IMAGEN
      pokeImage(pokeImg);
      //NOMBRE
      pokeNombre(pokeNum, pokeNom);
      //TIPO
      pokeTipo(pokeTip);
      //HABILIDADES
      pokeHabilidades(pokeHab);
      //MOVIMIENTOS
      pokeMovimientos(pokeMov);
      //PESO Y ALTURA
      pokePesoAltura(pokeAltura,pokePeso);
      //DATOS
      console.log(pokeDatos);
      pokeInfo(pokeDatos);
    }
  });
}

const pokeImage = (url) => {
  const pokePhoto = document.getElementById("pokeImg");
  pokePhoto.src = url;
}

const pokeNombre = (id, nombre) => {
  const pokeNombre = document.getElementById("txtNombrePokemon");
  pokeNombre.innerHTML = `#${id} ${nombre}`;
}

const pokeTipo = (tipo) => {
  const pokeTipo = document.getElementById("txtTipo");
  let elemContruir = "";
  let claseTip = "";

  for (var i = 0; i < tipo.split(',').length; i++) {

    switch (tipo.split(',')[i]) {
      case 'steel':
        claseTip = "colorTip-Steel";
        break;
      case 'water':
        claseTip = "colorTip-Water";
        break;
      case 'bug':
        claseTip = "colorTip-Bug";
        break;
      case 'dragon':
        claseTip = "colorTip-Dragon";
        break;
      case 'electric':
        claseTip = "colorTip-Electric";
        break;
      case 'ghost':
        claseTip = "colorTip-Ghost";
        break;
      case 'fire':
        claseTip = "colorTip-Fire";
        break;
      case 'fairy':
        claseTip = "colorTip-fairy";
        break;
      case 'ice':
        claseTip = "colorTip-Ice";
        break;
      case 'struggle':
        claseTip = "colorTip-Struggle";
        break;
      case 'normal':
        claseTip = "colorTip-Normal";
        break;
      case 'plant':
        claseTip = "colorTip-Plant";
        break;
      case 'psychic':
        claseTip = "colorTip-Psychic";
        break;
      case 'rock':
        claseTip = "colorTip-rock";
        break;
      case 'sinister':
        claseTip = "colorTip-Sinister";
        break;
      case 'land':
        claseTip = "colorTip-Land";
        break;
      case 'poison':
        claseTip = "colorTip-Poison";
        break;
      case 'flying':
        claseTip = "colorTip-Flying";
        break;

      default:
        claseTip = "badge-secondary";
    }


    elemContruir += ` <a class= 'badgeTip ${claseTip}'> ${tipo.split(',')[i].toUpperCase()} </a>` + " ";
  }

  pokeTipo.innerHTML = `Tipo: ${elemContruir} `;
}

const pokeHabilidades = (habilidades) => {
  const pokeHab = document.getElementById("txtHabilidad");
  let elemContruir = "";
  let claseTip = "colorTip-Steel";

  for (var i = 0; i < habilidades.split(',').length; i++) {
    elemContruir += ` <a class= 'badgeTip ${claseTip}'> ${habilidades.split(',')[i].toUpperCase()} </a>` + " ";
  }

  pokeHab.innerHTML = `Habilidades: ${elemContruir} `;
}

const pokeMovimientos = (movimientos) => {
  const pokeMov = document.getElementById("txtMovimientos");
  let elemContruir = "";
  let claseTip = "colorTip-Steel";

  for (var i = 0; i < 5; i++) {
    elemContruir += ` <a class= 'badgeTip ${claseTip}'> ${movimientos.split(',')[i].toUpperCase()} </a>` + " ";
  }

  pokeMov.innerHTML = `Movimientos: ${elemContruir} `;
}

const pokePesoAltura = (altura, peso) => {
  const pokeAltura = document.getElementById("txtAltura");
  pokeAltura.innerHTML = `Altura: ${altura} M`;

  const pokePeso = document.getElementById("txtPeso");
  pokePeso.innerHTML = `Peso: ${peso} KG.`;


}

const pokeInfo = (datos) => {
  const pokeDatos = document.getElementById("txtPuntos");
  let elemContruir = "";
  let claseTip = "colorTip-Steel";

  for (var i = 0; i < 3; i++) {
    elemContruir += ` <a class= 'badgeInfo ${claseTip}'> ${datos.split(',')[i].toUpperCase()} </a>` + " ";
  }

  pokeDatos.innerHTML = `${elemContruir} `;
}






