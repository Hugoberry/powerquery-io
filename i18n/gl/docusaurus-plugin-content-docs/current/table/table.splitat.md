---
title: Table.SplitAt
---

# Table.SplitAt


Devolve unha lista que contén as primeiras filas de recontos especificadas e as filas restantes.


## Syntax

```powerquery
Table.SplitAt(
    table as table,
    count as number
) as list
```


## Remarks

Devolve unha lista que contén dúas táboas: unha táboa coas N primeiras filas de `table` (segundo especifica `count`) e unha táboa que contén as filas restantes de `table`. Se as táboas da lista resultante se enumeran exactamente unha vez e en orde, a función enumerará `table` só unha vez.


## Examples

### Example #1
Devolva as dúas primeiras filas da táboa e as filas restantes desta.
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
