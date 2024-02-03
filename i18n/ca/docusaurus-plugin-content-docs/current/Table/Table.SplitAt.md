---
title: Table.SplitAt
---

# Table.SplitAt


## Description

Retorna una llista que conté les primeres files del recompte especificades i les files restants.


## Syntax

```powerquery
Table.SplitAt(
    table as table,
    count as number
) as list
```


## Details

Retorna una llista que conté dues taules: una amb les primeres N files de l'element <code>table</code> (tal com ho ha especificat l'element <code>count</code>) i una altra que conté les files restants de l'element <code>table</code>.Si les taules de la llista resultant estan enumerades una vegada i per ordre, la funció enumerarà l'element <code>table</code> només una vegada.


## Examples

### Example #1 
Retorna les dues primeres files de la taula i les restants.
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
