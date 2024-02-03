---
title: Table.Transpose
---

# Table.Transpose


## Description

Maakt kolommen in rijen en rijen in kolommen.


## Syntax

```powerquery
Table.Transpose(
    table as table,
    optional columns as any
) as table
```


## Details

Maakt kolommen in rijen en rijen in kolommen.


## Examples

### Example #1 
Kolommen maken van de rijen uit de tabel met naam-waarde-paren.
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
