---
title: Table.TransformRows
---

# Table.TransformRows


Transformeert de rijen van de tabel met behulp van de opgegeven transformatiefunctie.


## Syntax

```powerquery
Table.TransformRows(
    table as table,
    transform as function
) as list
```


## Remarks

Hiermee maakt u een <code>lijst</code> door de bewerking <code>transform</code> toe te passen op elke rij in <code>table</code>.


## Examples

### Example #1 
Transformeer de rijen van een tabel in een lijst met getallen.
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
Transformeer de rijen van een numerieke tabel naar tekstrecords.
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
