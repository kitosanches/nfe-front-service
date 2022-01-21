Node version: 16.13.0
npm version: 8.1.3

rode 'npm i' para instalar as dependências
rode 'ng serve' e acesse http://localhost:4200/

- O sistema foi totalmente desenvolvido no front-end. Porque sou desenvolvedor full front-end, não domino backend.

- O sistema foi desenvolvido para carregar apenas arquivos xml. O XML deve estar na estrutura do arquivo nota-fiscal.xml que está na pasta raiz do projeto.

- A cada 120 segundos serão verificados os arquivos com status 'aguardando processamento', ao encontrar um arquivo com esse status, o sistema irá alterar o status para 'em processamento', esperar 20 segundos (Simulando o tempo de espera de processamento). Então, se o arquivo está com a estrutura correta o status é alterado para 'processada', caso contrário é alterado para 'processada com erro'.

- Ao recarregar a página os arquivos são perdidos, pois estão apenas em memória.

- Ao clicar em Duplicatas é redirecionado para a rota de duplicatas daquele arquivo, exibindo as duplicatas em uma tabela. O voltar retorna para a tela anterior.

- Ao clicar em remover, é exibido um pop-up de confirmação, ao confirmar o arquivo é removido da lista.