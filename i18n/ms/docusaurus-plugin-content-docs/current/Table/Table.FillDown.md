---
title: Table.FillDown
---

# Table.FillDown


## Description

Menyebarkan nilai daripada sel sebelumnya kepada sel bernilai nol di bawah dalam lajur.


## Syntax

```powerquery
Table.FillDown(
    table as table,
    columns as list
) as table
```


## Details

Mengembalikan jadual daripada <code>table</code> yang ditentukan yang mana nilai sel sebelumnya disebarkan kepada sel bernilai nol di bawah dalam <code>columns</code> yang ditentukan.


## Examples

### Example #1 
Mengembalikan jadual dengan nilai nol dalam lajur [Place] diisi dengan nilai di atasnya daripada jadual.
```powerquery
Table.FillDown(
    Table.FromRecords({
        [Place = 1, Name = "Bob"],
        [Place = null, Name = "John"],
        [Place = 2, Name = "Brad"],
        [Place = 3, Name = "Mark"],
        [Place = null, Name = "Tom"],
        [Place = null, Name = "Adam"]
    }),
    {"Place"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Place = 1, Name = "Bob"],
    [Place = 1, Name = "John"],
    [Place = 2, Name = "Brad"],
    [Place = 3, Name = "Mark"],
    [Place = 3, Name = "Tom"],
    [Place = 3, Name = "Adam"]
})
```




## Category
Table.Transformation
