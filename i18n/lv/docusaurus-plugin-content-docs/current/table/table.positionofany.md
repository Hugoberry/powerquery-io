---
title: Table.PositionOfAny
---

# Table.PositionOfAny


Tiek atgriezta tabulā esošas jebkuras norādītās rindas pozīcija vai pozīcijas.


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

Atgriež rindas(-u) pozīciju(-as) no `table` saraksta pirmā gadījuma `rows`. Ja nav atrasts neviens gadījums, tiek atgriezta vērtība -1.

-   `table`: ievades tabula.
-   `rows`: to tabulas rindu saraksts, kam jāatrod pozīcijas.
-   `occurrence`: *\[Neobligāti\]* norāda, kuri rindas gadījumi jāatgriež.
-   `equationCriteria`: *\[Neobligāti\]* kontrolē salīdzināšanu starp tabulas rindām.


## Examples

### Example #1
Atrodiet \[a = 2, b = 4\] vai \[a = 6, b = 8\] pirmā gadījuma pozīciju tabulā `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
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
Atrodiet \[a = 2, b = 4\] vai \[a = 6, b = 8\] visu gadījumu pozīcijas tabulā `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}`.
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
