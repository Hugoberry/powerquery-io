---
title: Table.Transpose
---

# Table.Transpose


## Description

Ændrer kolonner til rækker og rækker til kolonner.


## Syntax

```powerquery
Table.Transpose(
    table as table,
    optional columns as any
) as table
```


## Details

Ændrer kolonner til rækker og rækker til kolonner.


## Examples

### Example #1 
Skift rækkerne i tabellen med navne/værdi-par til kolonner.
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
