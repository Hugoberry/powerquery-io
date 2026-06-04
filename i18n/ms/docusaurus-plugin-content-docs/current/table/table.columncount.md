---
title: Table.ColumnCount
---

# Table.ColumnCount


Mengembalikan bilangan lajur dalam jadual.


## Syntax

```powerquery
Table.ColumnCount(
    table as table
) as number
```


## Remarks

Mengembalikan bilangan lajur dalam jadual `table`.


## Examples

### Example #1
Cari bilangan lajur dalam jadual.
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
