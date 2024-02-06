---
title: Table.DemoteHeaders
---

# Table.DemoteHeaders


Stuft die Spaltenüberschriften zur ersten Zeile mit Werten herab.


## Syntax

```powerquery
Table.DemoteHeaders(
    table as table
) as table
```


## Remarks

Stuft die Spaltenüberschriften (also die Spaltennamen) zur ersten Zeile mit Werten herab. Die standardmäßigen Spaltennamen lauten "Column1", "Column2" usw.


## Examples

### Example #1 
Stuft die erste Zeile mit Werten in der Tabelle tiefer.
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
