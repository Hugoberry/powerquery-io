---
title: Table.DemoteHeaders
---

# Table.DemoteHeaders


Flyttar ned kolumnrubrikerna till den första raden med värden.


## Syntax

```powerquery
Table.DemoteHeaders(
    table as table
) as table
```


## Remarks

Flyttar ned kolumnrubrikerna (d.v.s. kolumnnamn) till den första raden med värden. Standardkolumnvärdena är "Kolumn1", "Kolumn2" och så vidare.


## Examples

### Example #1 
Flytta ned den första raden med värden i tabellen.
```powerquery
Table.DemoteHeaders(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = "CustomerID", Column2 = "Name", Column3 = "Phone"],
    [Column1 = 1, Column2 = "Bob", Column3 = "123-4567"],
    [Column1 = 2, Column2 = "Jim", Column3 = "987-6543"]
})
```




## Category
Table.Column operations
