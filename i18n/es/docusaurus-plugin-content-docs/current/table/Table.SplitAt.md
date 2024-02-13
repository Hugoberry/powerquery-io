---
title: Table.SplitAt
---

# Table.SplitAt


Devuelve una lista que contiene las primeras filas de recuento especificadas y las filas restantes.


## Syntax

```powerquery
Table.SplitAt(
    table as table,
    count as number
) as list
```


## Remarks

Devuelve una lista que contiene dos tablas: una tabla con las primeras N filas de <code>table</code> (según lo especificado por <code>count</code>) y una tabla que contiene las filas restantes de <code>table</code>.. Si las tablas de la lista resultante se enumeran exactamente una vez y en orden, la función <code>table</code> enumerará sólo una vez.


## Examples

### Example #1 
Devuelve las dos primeras filas de la tabla y las restantes filas de la tabla.
```powerquery
Table.SplitAt(#table({"a", "b", "c"}, {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}), 2)
```

Result: 
```powerquery
{
    #table({"a", "b", "c"}, {{1, 2, 3}, {4, 5, 6}}),
    #table({"a", "b", "c"}, {{7, 8, 9}})
}
```




## Category
Table.Row operations
