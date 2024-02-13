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

Retorna um perfil para as colunas em <code>table</code>.<br />As informações a seguir são retornadas para cada coluna (quando aplicável):<ul>  <li>mínimo</li>  <li>máximo</li>  <li>média</li>  <li>desvio padrão</li>  <li>contagem</li>  <li>contagem nula</li>  <li>contagem distinta</li></ul><br />



## Category
Table.Information
