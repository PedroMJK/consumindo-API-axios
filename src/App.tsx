
import { useEffect, useState } from 'react';
import './App.css'; 
import axios from 'axios'; // Importando a biblioteca axios para fazer requisições HTTP

function App() {
  // Declarando o estado `count` que irá contar o número de cliques no botão
  const [count, setCount] = useState(0);

  // Declarando o estado `user` que irá armazenar os dados do usuário
  const [user, setUser] = useState({});
  
  // Declarando o estado `loading` que controla a exibição de um carregamento
  const [loading, setLoading] = useState(true);

  // Hook useEffect que será executado quando o componente for montado ou quando o valor de `count` mudar
  useEffect(() => {
    axios
      .get('https://api.github.com/users/octocat')
      .then((response) => {
        // Quando a requisição for bem-sucedida, armazena os dados do usuário no estado
        setUser(response.data);
        // Atualiza o estado de loading para false, indicando que o carregamento foi concluído
        setLoading(false);
      })
      .catch((error) => console.log(error)) // Caso ocorra um erro, exibe no console
      .finally(() => console.log("Operação Concluída!")); // Executado após a conclusão da requisição
  }, []); 

  return (
    <>
      <div>
        {loading ? (
          // Se `loading` for true, exibe a mensagem de carregamento
          <h1>Carregando informações...</h1>
        ) : (
          <>
            {/* Se `loading` for false, exibe as informações do usuário */}
            <h1>Título do Projeto</h1>
            <img src={user.avatar_url} alt="Avatar do usuário" /> 
            <div className="card">
              <p>{user.login}</p> 
            </div> 
          </>
        )}
       
      </div>
    </>
  );
}

export default App;
