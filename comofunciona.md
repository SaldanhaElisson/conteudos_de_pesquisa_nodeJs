# Como funciona o NodeJs

## Imagine...
Uma batalha entre 2 restaurantes...

Qual terá o melhor atendimento?

**Restaurante do Tio Apache**
- Diferencial: **Cada cliente tem seu proprio garçon**

- [ ] Um cliente vai fazer o pedido de uma pizza
    
    - [ ] Um garçon é direcionado até sua mesa
    - [ ] Pega o pedido e leva até a cozinha, para o chefe prepara
    - [ ] O chefe, por regra do restaurante, irá proibir e bloquear o garçon de voltar para o cliente, até que o pedido fique pronto
    - [ ] O cliente queria muito fazer mais pedido, mas não pode, pois o garçon está bloqueado
    - [ ] Após o pedido ficar prontom o garçon leva de volta para o cliente
- [ ] O cliente foi embora e por regra de restaurante, o garçon é despedido

- [ ] Chegou 100 cliente numca noite
    
    - [ ] O gerente precisou contratar mais garçon...

```     
    é um serviço caro e de primeira, mas lento né? 
    
    A regra de bloquear os garçons e ter que contratar um garçon para cliente, 
    
    torna o serviço caro e lento.

```

**Restaurante do Noderson**
- Diferencial: O garçon de nome Eveneto Lupin

- [ ] Mesa 1: O cliente vai fazer o pedido de uma pizza

    - [ ] Eveneto Lupin pega o pedido e leva para o Chef
    - [ ] Volta com gosto de gás para a próxima mesa
- [ ] Mesa2: O cliente faz o pedido de uma salada

    - [ ] Eveneto Lupin já pegou o pedido e levou para o Chef
- [ ] O chef tocou o sininho avisando que o pedido da mesa 1 já ficou pronto e Eveneto corre para pegar e fazer a entrega do pedido

```
    O segredo de Eveneto é que ele sabe trabalahar de maneira assìncrona, fazendo mais de 1 evento de cada vez e não tem nada que o bloqueie. 
    
    Ele é muito solicitado e faz seu trabalho muito bem feito
```


## Decifrando...

- [ ] Tio Apache = Apache

- [ ] Noderson = Node 

- [ ] Pedido = Request

- [ ] Garçon = Thread

- [ ] Cozinha = Servidor

- [ ] Chef = Banco de Dados

- [ ] Eveneto Lupin = Event Loop

## Node é single-threaded, non-blocking e asynchrunos
