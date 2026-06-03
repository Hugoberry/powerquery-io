---
title: Table.Profile
---

# Table.Profile


Devolve um perfil das colunas de uma tabela.


## Syntax

```powerquery
Table.Profile(
    table as table,
    optional additionalAggregates as list
) as table
```


## Remarks

Devolve um perfil para as colunas em `table`.

São devolvidas as seguintes informações para cada coluna (quando aplicável):

-   mínimo
-   máximo
-   média
-   desvio padrão
-   contagem
-   contagem nula
-   contagem distinta



## Category
Table.Information
