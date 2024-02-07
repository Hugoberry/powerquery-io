---
title: MailChimp.Collection
---

# MailChimp.Collection


Retorna uma tabela com os dados de um ponto de extremidade do MailChimp.


## Syntax

```powerquery
MailChimp.Collection(
    path as text,
    optional entityName as text
) as table
```


## Remarks

Faz uma chamada para a API do MailChimp e retorna o conjunto de dados resultante como uma tabela. Passa automaticamente por todos os resultados. O parâmetro opcional entityName pode ser usado para pontos de extremidade da API onde o ponto de extremidade raiz e o entityName principal na resposta JSON não correspondem.


## Examples

### Example #1 
Efetua pull de uma tabela de dados do ponto de extremidade de listas da API do MailChimp.
```powerquery
MailChimp.Collection("lists")
```

Result: 
```powerquery
Uma tabela com os dados da lista.
```


### Example #2 
Efetua pull de uma tabela de dados do ponto de extremidade de pastas de campanha da API do MailChimp.
```powerquery
MailChimp.Collection("campaign-folders", "folders")
```

Result: 
```powerquery
Uma tabela com os dados de pastas de campanha.
```



