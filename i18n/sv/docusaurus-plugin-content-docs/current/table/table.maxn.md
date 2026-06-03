---
title: Table.MaxN
---

# Table.MaxN


Returnerar den eller de största raderna baserat på angivet villkor.


## Syntax

```powerquery
Table.MaxN(
    table as table,
    comparisonCriteria as any,
    countOrCondition as any
) as table
```


## Remarks

Returnerar den eller de största raderna i `table` baserat på angivet `comparisonCriteria`. När raderna har sorterats måste parametern `countOrCondition` användas om du vill filtrera resultatet ytterligare. Parametern `countOrCondition` kan ha olika form:

-   Om ett tal anges returneras en lista med upp till `countOrCondition` objekt i stigande ordning.
-   Om ett villkor anges returneras en lista med objekt som inledningsvis uppfyller villkoret. Om ett objekt inte uppfyller villkoret utvärderas inga fler objekt.


## Examples

### Example #1
Hitta raden med det största värdet i kolumnen \[a\] med villkoret \[a\] > 0 i tabellen. Raderna sorteras innan filtret tillämpas.
```powerquery
Table.MaxN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 0, b = 0],
        [a = 6, b = 2]
    }),
    "a",
    each [a] > 0
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 6, b = 2],
    [a = 2, b = 4]
})
```


### Example #2
Hitta raden med det största värdet i kolumnen \[a\] med villkoret \[b\] > 0 i tabellen. Tänk på att raderna sorteras innan filtret tillämpas.
```powerquery
Table.MaxN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 8, b = 0],
        [a = 6, b = 2]
    }),
    "a",
    each [b] > 0
)
```

Result: 
```powerquery
Table.FromRecords({})
```




## Category
Table.Ordering
