---
title: Table.TransformRows
---

# Table.TransformRows


Transformerar raderna i tabellen med hjälp av den angivna transformeringsfunktionen.


## Syntax

```powerquery
Table.TransformRows(
    table as table,
    transform as function
) as list
```


## Remarks

Skapar en <code>lista</code> genom att tillämpa <code>transform</code> på varje rad i <code>table</code>.


## Examples

### Example #1 
Omvandla raderna i en tabell till en lista med tal.
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
Omvandla raderna i en numerisk tabell till textposter.
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
