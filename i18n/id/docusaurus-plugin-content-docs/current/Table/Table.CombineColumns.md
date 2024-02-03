---
title: Table.CombineColumns
---

# Table.CombineColumns


## Description

Menggabungkan kolom yang ditetapkan menjadi kolom baru menggunakan fungsi pengkombinasi yang ditetapkan.


## Syntax

```powerquery
Table.CombineColumns(
    table as table,
    sourceColumns as list,
    combiner as function,
    column as text
) as table
```


## Details

Menggabungkan kolom yang ditetapkan menjadi kolom baru menggunakan fungsi pengkombinasi yang ditetapkan.


## Examples

### Example #1 
Mengabungkan nama belakang dan depan ke dalam kolom baru yang dipisahkan dengan koma.
```powerquery
Table.CombineColumns(
    Table.FromRecords({[FirstName = "Bob", LastName = "Smith"]}),
    {"LastName", "FirstName"},
    Combiner.CombineTextByDelimiter(",", QuoteStyle.None),
    "FullName"
)
```

Result: 
```powerquery
Table.FromRecords({[FullName = "Smith,Bob"]})
```




## Category
Table.Transformation
