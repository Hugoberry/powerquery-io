---
title: Table.Min
---

# Table.Min


Returnerar den minsta raden eller ett standardvärde baserat på angivet villkor.


## Syntax

```powerquery
Table.Min(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Remarks

Returnerar den minsta raden i <code>table</code> baserat på angivet <code>comparisonCriteria</code>. Om tabellen är tom returneras det valfria värdet <code>default</code>.


## Examples

### Example #1 
Hitta raden med det minsta värdet i kolumnen [a] i tabellen.
```powerquery
Table.Min(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8]
    }),
    "a"
)
```

Result: 
```powerquery
[a = 2, b = 4]
```


### Example #2 
Hitta raden med det minsta värdet i kolumnen [a] i tabellen. Returnera -1 om den är tom.
```powerquery
Table.Min(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
