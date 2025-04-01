import React, { useState, useEffect } from 'react'; // Importa React e hooks useState e useEffect
import api from './services/api'; // Importa a instância do Axios configurada para chamadas de API
import NarutoGallery from './components/NarutoGallery'; // Importa o componente que exibirá os ninjas
import './styles/App.css'; // Importa os estilos CSS do aplicativo

function App() {
  // Define estados para armazenar os ninjas, o estado de carregamento e erros
  const [ninjas, setNinjas] = useState([]); // Estado para armazenar os personagens
  const [loading, setLoading] = useState(false); // Estado para indicar carregamento
  const [error, setError] = useState(null); // Estado para armazenar erros

  // Função assíncrona que busca os dados da API
  const fetchNinjas = async () => {
    setLoading(true); // Define carregamento como verdadeiro
    setError(null); // Reseta qualquer erro anterior
    try {
      const response = await api.get('characters'); // Faz a requisição para obter os personagens
      console.log("Dados recebidos da API:", response.data); // Exibe os dados recebidos no console para depuração
    
      // Verifica se a resposta contém um array válido antes de processar os dados
      if (!response.data.characters || !Array.isArray(response.data.characters)) {
        throw new Error('Dados da API não estão no formato esperado.'); // Lança um erro caso o formato seja inválido
      }
    
      // Mapeia os dados recebidos para um formato adequado para o frontend
      const ninjaData = response.data.characters.map((ninja) => ({
        name: ninja.name, // Nome do personagem
        imageUrl: ninja.images?.[0] || 'https://via.placeholder.com/150', // Primeira imagem ou um placeholder
        natureType: ninja.natureType || 'Desconhecido', // Se não houver tipo de elemento, define como 'Desconhecido'
        jutsus: Array.isArray(ninja.jutsu) ? ninja.jutsu : [], // Garante que jutsu seja um array válido
      }));
    
      setNinjas(ninjaData); // Atualiza o estado com os dados processados
    } catch (err) {
      console.error('Erro ao obter ninjas:', err); // Exibe o erro no console
      setError('Falha ao carregar os ninjas'); // Define a mensagem de erro para o usuário
    } finally {
      setLoading(false); // Finaliza o carregamento, independente do sucesso ou falha
    }
  };

  // Hook useEffect para chamar a função fetchNinjas quando o componente for montado
  useEffect(() => {
    fetchNinjas(); // Executa a busca dos ninjas na montagem do componente
  }, []); // O array vazio garante que a função seja executada apenas uma vez

  return (
    <div className="App"> {/* Contêiner principal da aplicação */}
      <h1>Galeria de Ninjas do Naruto</h1> {/* Título do app */}
      {loading && <p>Carregando...</p>} {/* Exibe mensagem de carregamento enquanto a API responde */}
      {error && <p>{error}</p>} {/* Exibe mensagem de erro se houver falha na requisição */}
      {!loading && !error && <NarutoGallery ninjas={ninjas} />} {/* Renderiza a galeria de ninjas se não houver erro e não estiver carregando */}
    </div>
  );
}

export default App; // Exporta o componente App para ser utilizado em outros arquivos
