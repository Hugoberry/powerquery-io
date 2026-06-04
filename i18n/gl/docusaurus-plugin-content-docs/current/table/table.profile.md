---
title: Table.Profile
---

# Table.Profile


Devolve un perfil das columnas da táboa.


## Syntax

```powerquery
Table.Profile(
    table as table,
    optional additionalAggregates as list
) as table
```


## Remarks

Devolve un perfil para as columnas en `table`.

Cada columna devolve a seguinte información (en caso de ser aplicable):

-   mínimo
-   máximo
-   media
-   desviación estándar
-   total
-   total nulo
-   total diferenciado



## Category
Table.Information
