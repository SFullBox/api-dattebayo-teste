# Naruto Gallery

Um aplicativo React que exibe uma galeria de personagens do universo de Naruto, consumindo dados de uma API para listar ninjas, clãs, imagens e jutsus.

## 🚀 Instalação

### Pré-requisitos

- Node.js instalado
- npm ou yarn

### Passos

```bash
git clone <URL_DO_REPOSITORIO>
cd naruto-gallery
npm install # ou yarn install
npm start   # ou yarn start
```

Acesse em: [http://localhost:3000](http://localhost:3000)

## 📁 Estrutura do Projeto

- **App.js**: Componente principal que gerencia o estado dos ninjas.
- **NarutoGallery.js**: Renderiza os ninjas.
- **services/api.js**: Configura a comunicação com a API.
- **styles/**: Estilos CSS do app.

## 📡 API

A API retorna dados dos personagens:

```js
const response = await api.get('characters');
```

### Exemplo de resposta:

```json
{
  "characters": [
    {
      "name": "Naruto Uzumaki",
      "natureType": "Wind Release  (Affinity)",
      "images": ["url_da_imagem"],
      "jutsu": ["Rasengan", "Kage Bunshin no Jutsu"]
    }
  ]
}
```

### Tratamento de erros:

```js
catch (err) {
  console.error('Erro ao obter ninjas:', err);
  setError('Falha ao carregar os ninjas');
}
```

## 🔗 API

- https://api-dattebayo.vercel.app/docs

---

Com isso, o app estará pronto para uso!
