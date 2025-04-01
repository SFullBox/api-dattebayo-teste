import React from 'react';

// Componente funcional que recebe 'ninjas' como props
function NarutoGallery({ ninjas }) {
  return (
    <div className="naruto-gallery"> {/* Contêiner principal da galeria de ninjas */}
      {ninjas.map((ninja, index) => (  // Itera sobre o array 'ninjas' e renderiza um cartão para cada ninja
        <div key={index} className="ninja-card"> {/* Cada ninja é renderizado dentro de um 'ninja-card' */}
          <img src={ninja.imageUrl} alt={ninja.name} className="ninja-image" /> {/* Exibe a imagem do ninja */}
          <h3 className="ninja-name">{ninja.name}</h3> {/* Exibe o nome do ninja */}
          <p className="ninja-info"><strong>Elemento do chakra:</strong> {ninja.natureType}</p> {/* Exibe o elemento do chakra do ninja */}
          <h4 className="ninja-jutsus">Jutsus:</h4> {/* Título para a lista de jutsus */}
          <ul className="ninja-jutsu-list"> {/* Lista de jutsus */}
            {ninja.jutsus.map((jutsu, jutsuIndex) => (  // Itera sobre os jutsus do ninja
              <li key={jutsuIndex} className="ninja-jutsu-item">{jutsu}</li>  // Exibe cada jutsu em um item de lista
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default NarutoGallery; // Exporta o componente para ser utilizado em outros arquivos
