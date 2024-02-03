---
title: Table.Transpose
---

# Table.Transpose


## Description

Tekee sarakkeista rivejä ja riveistä sarakkeita.


## Syntax

```powerquery
Table.Transpose(
    table as table,
    optional columns as any
) as table
```


## Details

Tekee sarakkeista rivejä ja riveistä sarakkeita.


## Examples

### Example #1 
Tee nimi–arvo-parien taulukon riveistä sarakkeita.
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
