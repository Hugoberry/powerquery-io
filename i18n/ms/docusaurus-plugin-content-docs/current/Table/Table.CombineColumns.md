---
title: Table.CombineColumns
---

# Table.CombineColumns


## Description

Menggabungkan lajur yang ditentukan menjadi lajur baru menggunakan fungsi bekas yang ditentukan.


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

Menggabungkan lajur yang ditentukan menjadi lajur baru menggunakan fungsi bekas yang ditentukan.


## Examples

### Example #1 
Gabungkan nama terakhir dan pertama ke dalam lajur baharu, dipisahkan oleh koma.
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
