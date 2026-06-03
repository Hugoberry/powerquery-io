---
title: Table.PositionOfAny
---

# Table.PositionOfAny


Returnerer den eller de angivne positioner for alle de angivne rækker i tabellen.


## Syntax

```powerquery
Table.PositionOfAny(
    table as table,
    rows as list,
    optional occurrence as number,
    optional equationCriteria as any
) as any
```


## Remarks

Returnerer rækkens eller rækkernes position fra `table` af den første forekomst af listen i `rows`. Returnerer -1, hvis der ikke findes nogen forekomst.

-   `table`: Inputtabellen.
-   `rows`: Listen over rækker i tabellen, hvor positionerne skal findes.
-   `occurrence`: *(valgfrit)* Angiver, hvilke forekomster af rækken der skal returneres.
-   `equationCriteria`: *(valgfrit)* Styrer sammenligningen mellem tabelrækkerne.


## Examples

### Example #1
Find positionen af den første forekomst af \[a = 2, b = 4\] eller \[a = 6, b = 8\] i tabellen `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
```powerquery
Table.PositionOfAny(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    {
        [a = 2, b = 4],
        [a = 6, b = 8]
    }
)
```

Result: 
```powerquery
0
```


### Example #2
Find positionen af alle forekomster af \[a = 2, b = 4\] eller \[a = 6, b = 8\] i tabellen `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}`.
```powerquery
Table.PositionOfAny(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    {
        [a = 2, b = 4],
        [a = 6, b = 8]
    },
    Occurrence.All
)
```

Result: 
```powerquery
{0, 1, 2}
```




## Category
Table.Membership
