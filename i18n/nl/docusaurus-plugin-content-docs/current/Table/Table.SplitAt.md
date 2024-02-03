---
title: Table.SplitAt
---

# Table.SplitAt


## Description

Retourneert een lijst met de eerste N rijen die zijn opgegeven en de resterende rijen.


## Syntax

```powerquery
Table.SplitAt(
    table as table,
    count as number
) as list
```


## Details

Hiermee wordt een lijst geretourneerd met twee tabellen: een tabel met de eerste N rijen van <code>table</code> (zoals opgegeven door <code>count</code>) en een tabel met de resterende rijen van <code>table</code>.Als de tabellen van de resulterende lijst precies één keer en op volgorde worden genummerd, wordt de functie <code>table</code> slechts één keer genummerd.


## Examples

### Example #1 
Hiermee worden de eerste twee rijen van de tabel geretourneerd en de resterende rijen van de tabel.
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
