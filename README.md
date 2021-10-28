# twitter-clone
Clone do Twitter, desafio proposto pelo processo seletivo de estágio da empresa SuperSim

# Caracteristicas

> Aplicação em React

Nota: Meu primeiro Projeto em React, e a pesar do curto espaço de tempo foi bem proveitoso e gratificante entender seu funcionamento.

> Possui duas páginas conforme proposto, sendo elas a página inicial de login, e a página Home.

> Lista Populada Dinamicamente

O campo "O que está acontecendo" à direita da home possuí dados dinamicos consumidos a partir da API pública News API https://newsapi.org/. 
Sua versão gratuita possui limite de requisições diarias, portanto, pode não funcionar em algum momento, mas está funcional enquanto disponivel e simula os assuntos do momento.
Caso a tabela não esteja funcionando, aqui vai uma chave da API que pode ser alterada no arquivo NewsList.js : https://newsapi.org/v2/top-headlines?country=br&apiKey=5ae58f63e80c4d0ab0cd1a30fc50545b

Duvidas, favor consultar a documentação disponivel em: https://newsapi.org/docs/endpoints/top-headlines

> Projeto rodando no Netlify

# Confira através do link:  https://sad-pike-77eeca.netlify.app/
# Passo à passo:

1 - Acesse o link
2 - Clique no botão "Entrar"
3 - Clique no botão "Avançar"
4 - Você será direcionado à home.



# Estratégia e ideias

A minha estratégia inicial foi construir o front end da aplicação, seu estilo em CSS, e posteriormente incluir o consumo de API, Formulário de Login e demais funcionalidades.
Previ que conseguiria completar o desafio e com o tempo restante acrescentaria alguma feature Extra.

> Features Extras 

Implementação de Tweets com Json:

Houve a ideia de implementar Tweets com Json, mas o tempo já estava se esgotando, por isso só é possivel fazer a leitura dos dados.
Tive problemas em implementar a modal da página de login, mas estes foram resolvidos. 
As rotas de acesso a partir da página de login para a home não funcionaram, e por esse motivo, o redirecionamento foi feito atraves de link.
Também não tive tempo de implementar testes automatizados.
Precisaria de mais um dia para implementação dos testes.

> Correções Futuras 

Rotas não estão funcionando. 
Acredito que com mais 1 dia conseguiria entender melhor seu funcionamento e implementar o acesso a página home a partir da página de login.
Como alternativa, o botão na tela de login direciona diretamente a página home ao clicar.

Responsividade 

Podem existir problemas com a responsividade em telas menores que a do computador de desenvolvimento.


Sinto a necessidade de refatorar o código, rever algumas classes e ids para manter o código limpo e oganizado.
O tempo foi o maior adversario nesse desafio, e acredito que com mais um dia livre conseguiria deixar o código mais limpo e agradavel.


# O que aprendi?

> Aprendi que a gestão de tempo é parte crucial do trabalho.
> Apis são muito legais de se trabalhar.
> React parece dificil no começo, porém é muito satisfatório seu aprendizado.




