---
title: Table.Transpose
---

# Table.Transpose


## Description

Μετατρέπει στήλες σε γραμμές και γραμμές σε στήλες.


## Syntax

```powerquery
Table.Transpose(
    table as table,
    optional columns as any
) as table
```


## Details

Μετατρέπει στήλες σε γραμμές και γραμμές σε στήλες.


## Examples

### Example #1 
Μετατρέψτε τις γραμμές του πίνακα των ζευγών ονόματος-τιμής σε στήλες.
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
