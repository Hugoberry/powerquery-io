---
title: Table.PositionOf
---

# Table.PositionOf


Pateikiama eilutės padėtis arba padėtys lentelėje.


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

Pateikiama pirmojo `row` atvejo eilutės padėtis nurodytoje `table`. Jei atvejų nerandama, pateikiama -1.

-   `table`: įvesties lentelė.
-   `row`: lentelės eilutė, kurios padėtį reikia rasti.
-   `occurrence`: *(pasirenkama)* nurodoma, kuriuos eilutės atvejus pateikti.
-   `equationCriteria`: *(pasirenkama)* valdomas lentelės eilučių palyginimas.


## Examples

### Example #1
Raskite pirmojo \[a = 2, b = 4\] atvejo padėtį lentelėje `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
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
Raskite antrojo \[a = 2, b = 4\] atvejo padėtį lentelėje `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
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
Raskite visų \[a = 2, b = 4\] atvejų padėtį lentelėje `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
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
