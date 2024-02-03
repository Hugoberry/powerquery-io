---
title: Table.Transpose
---

# Table.Transpose


## Description

Stulpeliai pakeičiami į eilutes, o eilutės – į stulpelius.


## Syntax

```powerquery
Table.Transpose(
    table as table,
    optional columns as any
) as table
```


## Details

Stulpeliai pakeičiami į eilutes, o eilutės – į stulpelius.


## Examples

### Example #1 
Pavadinimų reikšmių porų lentelės eilutės pakeičiamos į stulpelius.
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
