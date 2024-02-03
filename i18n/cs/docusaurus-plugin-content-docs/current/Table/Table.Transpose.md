---
title: Table.Transpose
---

# Table.Transpose


## Description

Změní sloupce na řádky a řádky na sloupce.


## Syntax

```powerquery
Table.Transpose(
    table as table,
    optional columns as any
) as table
```


## Details

Změní sloupce na řádky a řádky na sloupce.


## Examples

### Example #1 
Změní řádky tabulky ve dvojici název-hodnota na sloupce.
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
