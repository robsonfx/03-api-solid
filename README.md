# App

GymPass Style app.

## RFs (Requisitos Funcionais)

[x] Deve ser possível se cadastrar;
[x] Deve ser possível se autenticar;
[x] Deve ser possível obter o perfil de um usuário logado;
[x] Deve ser possível obter o numero de checkins realizados pelo usuário logado;
[x] Deve ser possível o usuário obter seu histórico de checkins;
[x] Deve ser possível o usuário buscar academias mais proximas (até 10km);
[x] Deve ser possível o usuario buscar academias pelo nome;
[x] Deve ser possível o usuário realizar checkin em uma academia;
[x] Deve ser possível validar o checkin de um usuário;
[x] Deve ser possível cadastrar uma academia;

## RNs (Regras de Negócio)

[x] O usuário nao deve poder se cadastrar com um e-mail duplicado;
[x] O usuário nao pode fazer dois checkins no mesmo dia;
[x] O usuário nao pode fazer checkin se nao estiver perto (100m) da academia;
[x] O checkin so pode ser validado até 20 minutos após criado;
[x] O chekin so pode ser validado por administradores;
[x] A academia so pode ser cadastrada por administradores;


## RNFs (Requisitos não-funcionais)

[x] A senha do usuario precisa estar criptografada;
[x] Os dados da aplicacao precisam estar persistidos em um banco PostgreSQL
[x] Todas lista de dados precisam estar paginadas com 20 itens por página;
[x] O usuário deve ser identificado por um JWT (JSON Web Token);
