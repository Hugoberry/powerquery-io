---
title: Table.DemoteHeaders
---

# Table.DemoteHeaders


## Description

Баған тақырыптарын мәндердің бірінші жолына төмендетеді.


## Syntax

```powerquery
Table.DemoteHeaders(
    table as table
) as table
```


## Details

Баған тақырыптарын (яғни, баған атауларын) мәндердің бірінші жолына төмендетеді. Әдепкі баған атаулары: "1-баған", "2-баған" және т.с.с.


## Examples

### Example #1 
Кестедегі мәндердің бірінші жолын төмендету.
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
