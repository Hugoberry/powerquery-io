---
title: Table.Transpose
---

# Table.Transpose


## Description

Бағандарды жолдарға және жолдарды бағандарға түрлендіру.


## Syntax

```powerquery
Table.Transpose(
    table as table,
    optional columns as any
) as table
```


## Details

Бағандарды жолдарға және жолдарды бағандарға түрлендіру.


## Examples

### Example #1 
Атау-мән жұптары кестесінің жолдарын бағандарға түрлендіру.
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
