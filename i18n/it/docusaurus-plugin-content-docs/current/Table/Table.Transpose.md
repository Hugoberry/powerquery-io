---
title: Table.Transpose
---

# Table.Transpose


## Description

Trasforma le colonne in righe e le righe in colonne.


## Syntax

```powerquery
Table.Transpose(
    table as table,
    optional columns as any
) as table
```


## Details

Trasforma le colonne in righe e le righe in colonne.


## Examples

### Example #1 
Trasformare le righe della tabella di coppie nome-valore in colonne.
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
