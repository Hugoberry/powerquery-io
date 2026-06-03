---
title: Table.Max
---

# Table.Max


Returnerar den största raden eller standardvärdet baserat på angivet villkor.


## Syntax

```powerquery
Table.Max(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Remarks

Returnerar den största raden i `table` baserat på angivet `comparisonCriteria`. Om tabellen är tom returneras det valfria värdet `default`.


## Examples

### Example #1
Hitta raden med det största värdet i kolumnen \[a\] i tabellen `({[a = 2, b = 4], [a = 6, b = 8]})`.
```powerquery
Table.Max(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8]
    }),
    "a"
)
```

Result: 
```powerquery
[a = 6, b = 8]
```


### Example #2
Hitta raden med det största värdet i kolumnen \[a\] i tabellen `({})`. Returnera -1 om den är tom.
```powerquery
Table.Max(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
