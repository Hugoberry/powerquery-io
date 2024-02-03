---
title: Table.Profile
---

# Table.Profile


## Description

Muestra el perfil de las columnas de una tabla.


## Syntax

```powerquery
Table.Profile(
    table as table,
    optional additionalAggregates as list
) as table
```


## Details

Muestra un perfil para las columnas de <code>table</code>.<br />Se muestra la siguiente información de cada columna (cuando es aplicable):<ul>  <li>mínimo</li>  <li>máximo</li>  <li>promedio</li>  <li>desviación estándar</li>  <li>recuento</li>  <li>recuento nulo</li>  <li>recuento distinto</li></ul><br />



## Category
Table.Information
