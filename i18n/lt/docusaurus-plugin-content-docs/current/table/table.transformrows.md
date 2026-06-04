---
title: Table.TransformRows
---

# Table.TransformRows


Transformuojamos lentelės eilutės naudojant nurodytą transformavimo funkciją.


## Syntax

```powerquery
Table.TransformRows(
    table as table,
    transform as function
) as list
```


## Remarks

Sukuriamas `sąrašas` taikant `transform` operaciją kiekvienai eilutei `table`.


## Examples

### Example #1
Transformuokite lentelės eilutes į skaičių sąrašą.
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
Transformuokite skaitinės lentelės eilutes į tekstinius įrašus.
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
