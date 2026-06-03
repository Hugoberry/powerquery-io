---
title: Table.Profile
---

# Table.Profile


Retorna um perfil das colunas de uma tabela.


## Syntax

```powerquery
Table.Profile(
    table as table,
    optional additionalAggregates as list
) as table
```


## Remarks

Retorna um perfil para as colunas em `table`.

As informações a seguir são retornadas para cada coluna (quando aplicável):

-   mínimo
-   máximo
-   média
-   desvio padrão
-   contagem
-   contagem nula
-   contagem distinta



## Category
Table.Information
