---
title: Table.TransformRows
---

# Table.TransformRows


Transformerer rækkerne i tabellen ved hjælp af den angivne transformationsfunktion.


## Syntax

```powerquery
Table.TransformRows(
    table as table,
    transform as function
) as list
```


## Remarks

Opretter en <code>liste</code> ved at anvende handlingen <code>transform</code> på hver række i <code>table</code>.


## Examples

### Example #1 
Transformér rækkerne i en tabel til en liste med tal.
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
Transformér rækkerne i en numerisk tabel til tekstposter.
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
