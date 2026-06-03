---
title: Table.PositionOf
---

# Table.PositionOf


Returnerer den eller de angivne positioner for rækken i tabellen.


## Syntax

```powerquery
Table.PositionOf(
    table as table,
    row as record,
    optional occurrence as any,
    optional equationCriteria as any
) as any
```


## Remarks

Returnerer rækkepositionen af den første forekomst af `row` i den angivne `table`. Returnerer -1, hvis der ikke findes nogen forekomst.

-   `table`: Inputtabellen.
-   `row`: Rækken i tabellen, hvor placeringen skal findes.
-   `occurrence`: *(valgfrit)* Angiver, hvilke forekomster af rækken der skal returneres.
-   `equationCriteria`: *(valgfrit)* Styrer sammenligningen mellem tabelrækkerne.


## Examples

### Example #1
Find positionen af den første forekomst af \[a = 2, b = 4\] i tabellen `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4]
)
```

Result: 
```powerquery
0
```


### Example #2
Find positionen af den anden forekomst af \[a = 2, b = 4\] i tabellen `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4],
    1
)
```

Result: 
```powerquery
2
```


### Example #3
Find positionen af alle forekomster af \[a = 2, b = 4\] i tabellen `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4],
    Occurrence.All
)
```

Result: 
```powerquery
{0, 2}
```




## Category
Table.Membership
