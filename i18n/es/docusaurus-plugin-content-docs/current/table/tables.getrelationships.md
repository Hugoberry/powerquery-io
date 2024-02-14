---
title: Tables.GetRelationships
---

# Tables.GetRelationships


Obtiene las relaciones entre un conjunto de tablas.


## Syntax

```powerquery
Tables.GetRelationships(
    tables as table,
    optional dataColumn as text
) as table
```


## Remarks

Obtiene las relaciones entre un conjunto de tablas. Se presupone que el conjunto <code>tables</code> tiene una estructura similar a la de una tabla de navegación. La columna definida por <code>dataColumn</code> contiene las tablas de datos reales.



## Category
Table.Information
