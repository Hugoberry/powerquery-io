---
title: Table.TransformRows
---

# Table.TransformRows


Przekształca wiersze tabeli, używając określonej funkcji przekształcenia.


## Syntax

```powerquery
Table.TransformRows(
    table as table,
    transform as function
) as list
```


## Remarks

Tworzy <code>listę</code> stosując operację <code>transform</code> do każdego wiersza w <code>table</code>.


## Examples

### Example #1 
Przekształć wiersze tabeli na listę liczb.
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
Przekształć wiersze tabeli numerycznej na rekordy tekstowe.
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
