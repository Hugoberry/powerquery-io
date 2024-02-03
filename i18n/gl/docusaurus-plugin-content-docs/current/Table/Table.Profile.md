---
title: Table.Profile
---

# Table.Profile


## Description

Devolve un perfil das columnas da táboa.


## Syntax

```powerquery
Table.Profile(
    table as table,
    optional additionalAggregates as list
) as table
```


## Details

Devolve un perfil para as columnas en <code>table</code>.<br />Cada columna devolve a seguinte información (en caso de ser aplicable):<ul>  <li>mínimo</li>  <li>máximo</li>  <li>media</li>  <li>desviación estándar</li>  <li>total</li>  <li>total nulo</li>  <li>total diferenciado</li></ul><br />



## Category
Table.Information
