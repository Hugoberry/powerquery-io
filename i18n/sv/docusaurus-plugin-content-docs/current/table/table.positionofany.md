---
title: Table.PositionOfAny
---

# Table.PositionOfAny


Returnerar positionen eller positionerna för någon av de angivna raderna i tabellen.


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

Returnerar radernas positioner från `table` i den första förekomsten av listan för `rows`. Returnerar -1 om ingen förekomst hittas.

-   `table`: Indatatabellen.
-   `rows`: Listan med rader i tabellen som positionerna ska hittas för.
-   `occurrence`: *(Valfritt)* Anger vilka förekomster av raden som ska returneras.
-   `equationCriteria`: *(Valfritt)* Kontrollerar jämförelsen mellan tabellraderna.


## Examples

### Example #1
Hitta positionen för den första förekomsten av \[a = 2, b = 4\] eller \[a = 6, b = 8\] i tabellen `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
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
Hitta positionen för alla förekomster av \[a = 2, b = 4\] eller \[a = 6, b = 8\] i tabellen `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}`.
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
