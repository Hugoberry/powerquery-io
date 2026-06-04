---
title: Table.FillDown
---

# Table.FillDown


Mempropagasikan nilai sel sebelumnya ke sel bernilai null di bawah dalam kolom.


## Syntax

```powerquery
Table.FillDown(
    table as table,
    columns as list
) as table
```


## Remarks

Menghasilkan tabel dari `table` yang ditetapkan dengan nilai sel sebelumnya yang dipropagasi ke sel bernilai null di bawah dalam `columns` yang ditetapkan.


## Examples

### Example #1
Menghasilkan tabel dengan nilai null dalam kolom \[Place\] yang diisi dengan nilai di atasnya dari tabel.
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
