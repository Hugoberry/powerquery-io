---
title: Table.Transpose
---

# Table.Transpose


## Description

Az oszlopokat sorokra, a sorokat oszlopokra alakítja át.


## Syntax

```powerquery
Table.Transpose(
    table as table,
    optional columns as any
) as table
```


## Details

Az oszlopokat sorokra, a sorokat oszlopokra alakítja át.


## Examples

### Example #1 
Oszlopokra alakítja át a név-érték párokat tartalmazó tábla sorait.
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
