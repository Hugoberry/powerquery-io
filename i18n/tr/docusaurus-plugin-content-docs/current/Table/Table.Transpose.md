---
title: Table.Transpose
---

# Table.Transpose


## Description

Sütunları satır, satırları sütun haline getirir.


## Syntax

```powerquery
Table.Transpose(
    table as table,
    optional columns as any
) as table
```


## Details

Sütunları satır, satırları sütun haline getirir.


## Examples

### Example #1 
Tablonun ad-değer çifti olan satırlarını sütun haline getirir.
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
