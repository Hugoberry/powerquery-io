---
title: Table.FillUp
---

# Table.FillUp


## Description

Mempropagasikan nilai sel ke sel bernilai null di atas dalam kolom.


## Syntax

```powerquery
Table.FillUp(
    table as table,
    columns as list
) as table
```


## Details

Menghasilkan tabel dari <code>table</code> yang ditetapkan dengan nilai sel berikutnya yang dipropagasi ke sel bernilai null di atas dalam <code>columns</code> yang ditetapkan.


## Examples

### Example #1 
Menghasilkan tabel dengan nilai null dalam kolom [Column2] yang diisi dengan nilai di bawahnya dari tabel.
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
