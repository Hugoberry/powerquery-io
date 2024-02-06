---
title: Table.ColumnCount
---

# Table.ColumnCount


Retourneert het aantal kolommen uit de tabel.


## Syntax

```powerquery
Table.ColumnCount(
    table as table
) as number
```


## Remarks

Retourneert het aantal kolommen uit de tabel <code>table</code>.


## Examples

### Example #1 
Het aantal kolommen in de tabel zoeken.
```powerquery
Table.ColumnCount(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
3
```




## Category
Table.Information
