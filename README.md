# ChatBot 🤖

Uma aplicação de chatbot simples construída com `Flask` + `React`.

## 💻 Como executar

1. **Clone o repositório e o acesse**

    ```bash
    git clone https://github.com/Davi-1903/ChatBot.git
    cd ChatBot
    ```

2. **Instale todas as dependências**

    ```bash
    # Backend
    cd server
    pip install -r requirements.txt

    # Frontend
    cd ../client
    npm install
    ```

3. **Gere um build para produção**

    ```bash
    # Ainda dentro de client
    npm run build
    ```

4. **Crei um arquivo `.env` na raiz do projeto e adicione**

    ```env
    API_KEY="<CHAVE DA SUA API DO GOOGLE CLOUD>"
    ```

5. **Execute o servidor Flask**

    ```bash
    cd ../server
    flask run
    ```

> [!TIP]
> Certifique-se de que a API do Google Cloud esteja habilitada e que você tenha uma chave de API válida 😉

Se tudo ocorrer bem, a aplicação estará rodando em [`http://localhost:5000`](http://localhost:5000).
