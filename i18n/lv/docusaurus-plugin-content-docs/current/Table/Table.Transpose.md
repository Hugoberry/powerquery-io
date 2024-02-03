---
title: Table.Transpose
---

# Table.Transpose


## Description

Kolonnas tiek pārvērstas rindās un rindas tiek pārvērstas kolonnās.


## Syntax

```powerquery
Table.Transpose(
    table as table,
    optional columns as any
) as table
```


## Details

Kolonnas tiek pārvērstas rindās un rindas tiek pārvērstas kolonnās.


## Examples

### Example #1 
Pārvērtiet nosaukumu vērtību pāru tabulas rindas par kolonnām.
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
