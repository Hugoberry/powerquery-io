---
title: Table.SplitAt
---

# Table.SplitAt


Vráti zoznam obsahujúci zadaný prvý počet riadkov a zvyšné riadky.


## Syntax

```powerquery
Table.SplitAt(
    table as table,
    count as number
) as list
```


## Remarks

Vráti zoznam obsahujúci dve tabuľky: tabuľku s prvými N riadkami `table` (určenými podľa `count`) a tabuľkou obsahujúcou zvyšné riadky `table`. Ak sú tabuľky výsledného zoznamu enumerované presne raz a v poradí, funkcia bude enumerovať `table` iba raz.


## Examples

### Example #1
Vráti prvé dva riadky tabuľky a zvyšné riadky tabuľky.
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
