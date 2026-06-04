---
title: Table.PositionOf
---

# Table.PositionOf


Tiek atgriezta tabulā esošas rindas pozīcija vai pozīcijas.


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

Atgriež `row` pirmā gadījuma rindas pozīciju norādītajā `table` . Ja nav atrasts neviens gadījums, tiek atgriezta vērtība -1.

-   `table`: ievades tabula.
-   `row`: tabulas rinda, kurai jāatrod pozīcija.
-   `occurrence`: *\[Neobligāti\]* norāda, kuri rindas gadījumi jāatgriež.
-   `equationCriteria`: *\[Neobligāti\]* kontrolē salīdzināšanu starp tabulas rindām.


## Examples

### Example #1
Atrodiet \[a = 2, b = 4\] pirmā gadījuma pozīciju tabulā `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
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
Atrodiet \[a = 2, b = 4\] otrā gadījuma pozīciju tabulā `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
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
Atrodiet \[a = 2, b = 4\] visu gadījumu pozīcijas tabulā `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
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
