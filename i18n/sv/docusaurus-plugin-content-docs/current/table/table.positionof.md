---
title: Table.PositionOf
---

# Table.PositionOf


Returnerar positionen eller positionerna för raden i tabellen.


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

Returnerar radpositionen för den första förekomsten av `row` i angiven `table`. Returnerar -1 om ingen förekomst hittas.

-   `table`: Indatatabellen.
-   `row`: Raden i tabellen som positionen ska hittas för.
-   `occurrence`: *(Valfritt)* Anger vilka förekomster av raden som ska returneras.
-   `equationCriteria`: *(Valfritt)* Kontrollerar jämförelsen mellan tabellraderna.


## Examples

### Example #1
Hitta positionen för den första förekomsten av \[a = 2, b = 4\] i tabellen `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
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
Hitta positionen för den andra förekomsten av \[a = 2, b = 4\] i tabellen `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
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
Hitta positionen för alla förekomster av \[a = 2, b = 4\] i tabellen `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
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
