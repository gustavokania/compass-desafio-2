#  **Desafio 2 - Compass**

Realização do Segundo Desafio proposto pela Compass para demonstrar conhecimentos adquiridos até agora no Programa de Bolsas

## **Proposta**

* No mínimo 3 páginas HTML;
* No mínimo 3 rotas diferentes (home (main, header, footer), form e página extra);
* Utilizar Bootstrap (opcional);
* Padrão BEM de CSS;
* Ao menos uma validação utilizando Regex;
* Utilizar DOM;
* Criação de arquivo README;
* Todo código deverá estar no Github.

## **Desenvolvimento**

Criação de páginas referentes à franquia de jogos Disgaea, contendo Checklists, com o objetivo de auxiliar com a organização dos desbloqueios existentes dentro do jogo.

**0 - COMUM ENTRE TODAS PÁGINAS**
* Uma NavBar contendo o logo da franquia, botões de fácil acesso à página inicial, todas as checklists e uma página de registro;
* Um footer contendo informações de copyright;

**1 - HOME PAGE**
* Carrossel de imagens da franquia;
* Título e sessão com cards que direcionam o usuário às páginas de cada checklist disponível;
**OBS:** Por enquanto existe apenas a página de Checklist do Disgaea 5, as outras serão implementadas futuramente.

**2 - CHECKLIST DISGAEA 5**
* Banner característico do jogo em específico;
* Títulos e listagem de Classes a serem desbloqueadas, assim como o que é necessário ser alcançado para tal;
* Checkbox que pode ser marcado, o que aciona uma função do Javascript para marcar aquela linha/desbloqueio como já alcançado;

**3 - PÁGINA DE REGISTRO**
* Imagem do jogo;
* Campo de email de preenchimento obrigatório;
* Campo de senha de preenchimento obrigatório, o qual está atrelado à uma REGEX para validação de estrutura da senha (deve conter no mínimo 01 letra maiúscula, 01 letra minúscula, 01 número e entre 06 e 10 caracteres), assim como um alerta personalizado caso não esteja dentro dos parâmetros necessários;
* Campo de data de nascimento, o qual está atrelado à uma função do Javascript para impedir que o usuário preencha uma data futura à data no qual está fazendo seu cadastro, assim como retorna um alerta personalizado avisando o usuário do equívoco;
* Botão de Submit para mandar as informações corretas para efetuar o cadastro, o qual redireciona o usuário à página de conclusão de registro.

**4 - PÁGINA DE CONCLUSÃO DE REGISTRO**
* Imagem do jogo;
* Mensagem informando o usuário que seu registro foi efetuado com sucesso e que ele pode continuar a utilizar os serviços;
* Botão de conclusão que retorna o usuário à página inicial.


## **Versão**

1.0

## **Autor**

**Gustavo Banaszeski Kania: @gustavokania (no GitHub)** 