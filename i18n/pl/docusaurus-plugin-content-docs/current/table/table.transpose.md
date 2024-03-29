---
title: Table.Transpose
---

# Table.Transpose


Zamienia kolumny w wiersze i wiersze w kolumny.


## Syntax

```powerquery
Table.Transpose(
    table as table,
    optional columns as any
) as table
```


## Remarks

Zamienia kolumny w wiersze i wiersze w kolumny.


## Examples

### Example #1 
Zamień wiersze tabeli, która zawiera pary nazwa-wartość, w kolumny.
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
