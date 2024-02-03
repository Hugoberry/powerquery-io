---
title: Table.Transpose
---

# Table.Transpose


## Description

Membuat kolom menjadi baris dan baris menjadi kolom.


## Syntax

```powerquery
Table.Transpose(
    table as table,
    optional columns as any
) as table
```


## Details

Membuat kolom menjadi baris dan baris menjadi kolom.


## Examples

### Example #1 
Membuat baris tabel berisi pasangan nilai nama menjadi kolom.
```powerquery
Table.Transpose(
    Table.FromRecords({
        [Name = "Full Name", Value = "Fred"],
        [Name = "Age", Value = 42],
        [Name = "Country", Value = "UK"]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = "Full Name", Column2 = "Age", Column3 = "Country"],
    [Column1 = "Fred", Column2 = 42, Column3 = "UK"]
})
```




## Category
Table.Transformation
