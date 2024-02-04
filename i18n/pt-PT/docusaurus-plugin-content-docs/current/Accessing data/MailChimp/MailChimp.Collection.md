---
title: MailChimp.Collection
---

# MailChimp.Collection


## Description

Devolve uma tabela com dados de um ponto final do MailChimp.


## Syntax

```powerquery
MailChimp.Collection(
    path as text,
    optional entityName as text
) as table
```


## Details

Efetua uma chamada à API do MailChimp e devolve o conjunto de dados resultante como tabela. Percorre automaticamente todos os resultados. O parâmetro opcional entityName pode ser utilizado para pontos finais de API em que o ponto final de raiz e o entityName principal na resposta JSON não correspondem.


## Examples

### Example #1 
Solicita uma tabela de dados do ponto final lists da API do MailChimp.
```powerquery
MailChimp.Collection("lists")
```

Result: 
```powerquery
Uma tabela com dados de lista.
```


### Example #2 
Solicita uma tabela de dados do ponto final campaign-folders da API do MailChimp.
```powerquery
MailChimp.Collection("campaign-folders", "folders")
```

Result: 
```powerquery
Uma tabela com dados de campaign-folders.
```



