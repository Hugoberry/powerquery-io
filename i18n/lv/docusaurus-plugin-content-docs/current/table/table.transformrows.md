---
title: Table.TransformRows
---

# Table.TransformRows


Tabulas rindas tiek pārvērstas, izmantojot norādīto pārvēršanas funkciju.


## Syntax

```powerquery
Table.TransformRows(
    table as table,
    transform as function
) as list
```


## Remarks

Izveido `list`, lietojot `transform` darbību katrai `table` rindai.


## Examples

### Example #1
Pārveidot tabulas rindas skaitļu sarakstā.
```powerquery
Table.TransformRows(
    Table.FromRecords({
        [a = 1],
        [a = 2],
        [a = 3],
        [a = 4],
        [a = 5]
    }),
    each [a]
)
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```


### Example #2
Pārveidot rindas skaitļu tabulā teksta ierakstos.
```powerquery
Table.TransformRows(
    Table.FromRecords({
        [a = 1],
        [a = 2],
        [a = 3],
        [a = 4],
        [a = 5]
    }),
    (row) as record => [B = Number.ToText(row[a])]
)
```

Result: 
```powerquery
{
    [B = "1"],
    [B = "2"],
    [B = "3"],
    [B = "4"],
    [B = "5"]
}
```




## Category
Table.Transformation
