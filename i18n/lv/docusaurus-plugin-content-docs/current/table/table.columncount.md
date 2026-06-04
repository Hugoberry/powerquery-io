---
title: Table.ColumnCount
---

# Table.ColumnCount


Tiek atgriezts tabulas kolonnu skaits.


## Syntax

```powerquery
Table.ColumnCount(
    table as table
) as number
```


## Remarks

Tiek atgriezts tabulas `table` kolonnu skaits.


## Examples

### Example #1
Iegūstiet tabulas kolonnu skaitu.
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
