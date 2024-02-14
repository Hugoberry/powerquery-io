---
title: Table.Transpose
---

# Table.Transpose


Wandelt Spalten in Zeilen und Zeilen in Spalten um.


## Syntax

```powerquery
Table.Transpose(
    table as table,
    optional columns as any
) as table
```


## Remarks

Wandelt Spalten in Zeilen und Zeilen in Spalten um.


## Examples

### Example #1 
Wandelt die Zeilen der Tabelle mit Name-Wert-Paaren in Spalten um.
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
