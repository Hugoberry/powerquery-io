---
title: Table.Transpose
---

# Table.Transpose


## Description

Menjadikan lajur kepada baris dan baris kepada lajur.


## Syntax

```powerquery
Table.Transpose(
    table as table,
    optional columns as any
) as table
```


## Details

Menjadikan lajur kepada baris dan baris kepada lajur.


## Examples

### Example #1 
Jadikan baris jadual bagi pasangan nilai nama menjadi lajur.
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
