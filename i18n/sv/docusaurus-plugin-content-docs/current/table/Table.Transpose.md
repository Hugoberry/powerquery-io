---
title: Table.Transpose
---

# Table.Transpose


Omvandlar kolumner till rader och rader till kolumner.


## Syntax

```powerquery
Table.Transpose(
    table as table,
    optional columns as any
) as table
```


## Remarks

Omvandlar kolumner till rader och rader till kolumner.


## Examples

### Example #1 
Omvandla raderna i tabellen med namn-värde-par till kolumner.
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
