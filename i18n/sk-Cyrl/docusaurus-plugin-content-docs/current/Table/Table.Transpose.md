---
title: Table.Transpose
---

# Table.Transpose


## Description

Zo stĺpcov urobí riadky a z riadkov urobí stĺpce.


## Syntax

```powerquery
Table.Transpose(
    table as table,
    optional columns as any
) as table
```


## Details

Zo stĺpcov urobí riadky a z riadkov urobí stĺpce.


## Examples

### Example #1 
Urobte stĺpce z riadkov tabuľky párov názov-hodnota.
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
