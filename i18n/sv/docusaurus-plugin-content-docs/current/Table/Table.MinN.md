---
title: Table.MinN
---

# Table.MinN


## Description

Returnerar den eller de minsta raderna baserat på angivet villkor.


## Syntax

```powerquery
Table.MinN(
    table as table,
    comparisonCriteria as any,
    countOrCondition as any
) as table
```


## Details

Returnerar den eller de minsta raderna i <code>table</code> baserat på angivet <code>comparisonCriteria</code>. När raderna har sorterats måste parametern <code>countOrCondition</code> användas om du vill filtrera resultatet ytterligare. Parametern <code>countOrCondition</code> kan ha olika form:    <ul>        <li> Om ett tal anges returneras en lista med upp till <code>countOrCondition</code> objekt i stigande ordning. </li>        <li> Om ett villkor anges returneras en lista med objekt som inledningsvis uppfyller villkoret. Om ett objekt inte uppfyller villkoret utvärderas inga fler objekt. </li> </ul>


## Examples

### Example #1 
Hitta raden med det minsta värdet i kolumnen [a] med villkoret [a] &lt; 3 i tabellen. Tänk på att raderna sorteras innan filtret tillämpas.
```powerquery
Table.MinN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 0, b = 0],
        [a = 6, b = 4]
    }),
    "a",
    each [a] < 3
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 0, b = 0],
    [a = 2, b = 4]
})
```


### Example #2 
Hitta raden med det minsta värdet i kolumnen [a] med villkoret [b] &lt; 0 i tabellen. Tänk på att raderna sorteras innan filtret tillämpas.
```powerquery
Table.MinN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 8, b = 0],
        [a = 6, b = 2]
    }),
    "a",
    each [b] < 0
)
```

Result: 
```powerquery
Table.FromRecords({})
```




## Category
Table.Ordering
