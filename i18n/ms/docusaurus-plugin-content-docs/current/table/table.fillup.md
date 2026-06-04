---
title: Table.FillUp
---

# Table.FillUp


Menyebarkan nilai daripada sel kepada sel bernilai nol di atas dalam lajur.


## Syntax

```powerquery
Table.FillUp(
    table as table,
    columns as list
) as table
```


## Remarks

Mengembalikan jadual daripada `table` yang ditentukan yang mana nilai sel seterusnya disebarkan kepada sel bernilai nol di atas dalam `columns` yang ditentukan.


## Examples

### Example #1
Mengembalikan jadual dengan nilai nol dalam lajur \[Column2\] diisi dengan nilai di bawah daripada jadual.
```powerquery
Table.FillUp(
    Table.FromRecords({
        [Column1 = 1, Column2 = 2],
        [Column1 = 3, Column2 = null],
        [Column1 = 5, Column2 = 3]
    }),
    {"Column2"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 1, Column2 = 2],
    [Column1 = 3, Column2 = 3],
    [Column1 = 5, Column2 = 3]
})
```




## Category
Table.Transformation
