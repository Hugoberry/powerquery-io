---
title: Table.SplitAt
---

# Table.SplitAt


## Description

A megadott első sorokat és a fennmaradó sorokat tartalmazó listát adja vissza.


## Syntax

```powerquery
Table.SplitAt(
    table as table,
    count as number
) as list
```


## Details

Egy olyan listát ad vissza, amely két táblát tartalmaz: az elsőt <code>table</code> N soraival (<code>count</code> által meghatározott), és egyet a(z) <code>table</code> fennmaradó soraival.Ha az eredményül kapott lista táblái pontosan egyszer és sorrendben vannak felsorolva, <code>table</code> felsorolását is csak egyszer fogja elvégezi a függvény.


## Examples

### Example #1 
A tábla első két sorát és a tábla fennmaradó sorait adja vissza.
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
