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

Devolve um perfil para as colunas em <code>table</code>.<br />São devolvidas as seguintes informações para cada coluna (quando aplicável):<ul>  <li>mínimo</li>  <li>máximo</li>  <li>média</li>  <li>desvio padrão</li>  <li>contagem</li>  <li>contagem nula </li>  <li>contagem distinta </li></ul><br />



## Category
Table.Information
