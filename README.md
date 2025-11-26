LexMind

Frontend em React • Backend em Node.js • IA local Dolphin • Upload de documentos • Geração automática de opinião de voto
Este repositório contém um protótipo funcional de um sistema que sugere uma opinião de voto a partir de documentos oficiais. O foco do projeto é estudo, experimentação com IA local e composição para portfólio.


Como funciona?

1. O usuário acessa o frontend React.
2. Faz upload de documentos usados no contexto do voto:
  Instrução do Tribunal de Contas
  Parecer do Ministério Público / Decisões anteriores do TCE
3. O backend Node.js recebe os arquivos e envia para uma instância da IA Dolphin, instalada localmente no servidor.
4. A IA processa o conteúdo e gera uma opinião de voto sugerida, devolvida ao frontend.
5. O usuário vê a resposta diretamente na interface.


Tecnologias utilizadas:

  Frontend:
    React.js
    JavaScript
    CSS

  Backend:
    Node.js
    Express

  IA
    Dolphin 3 (instalada localmente no servidor)

----------------------------------------------------------------------------------

Status do projeto: Protótipo funcional.
  
  Atualmente serve como:
    estudo de integração de IA local com React + Node
    demonstração para portfólio
    base para expansão futura

  Melhorias previstas:
    autenticação
    histórico de votações
    melhoria do prompt engineering
    UI mais elaborada
    logs de requisições
    validação dos documentos enviados

<img width="1237" height="795" alt="lexmind1" src="https://github.com/user-attachments/assets/32321a18-1cef-461b-95f3-78526efed8d3" />
<img width="1243" height="730" alt="lexmind2" src="https://github.com/user-attachments/assets/d5b6dc9c-988f-4b1d-baf5-6e962bba19b5" />
