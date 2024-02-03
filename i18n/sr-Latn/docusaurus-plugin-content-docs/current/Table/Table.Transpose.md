---
title: Table.Transpose
---

# Table.Transpose


## Description

Pretvara kolone u redove, a redove u kolone.


## Syntax

```powerquery
Table.Transpose(
    table as table,
    optional columns as any
) as table
```


## Details

Pretvara kolone u redove, a redove u kolone.


## Examples

### Example #1 
Pretvaranje redova tabele sa parovima ime-vrednost u kolone.
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
