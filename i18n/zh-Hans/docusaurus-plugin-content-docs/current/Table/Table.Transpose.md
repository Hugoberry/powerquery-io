---
title: Table.Transpose
---

# Table.Transpose


## Description

使列成为行，并使行成为列。


## Syntax

```powerquery
Table.Transpose(
    table as table,
    optional columns as any
) as table
```


## Details

使列成为行，并使行成为列。


## Examples

### Example #1 
使名称-值对的表行成为列。
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
