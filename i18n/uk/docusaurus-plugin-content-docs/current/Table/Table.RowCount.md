---
title: Table.RowCount
---

# Table.RowCount


## Description

Повертає кількість рядків у таблиці.


## Syntax

```powerquery
Table.RowCount(
    table as table
) as number
```


## Details

Повертає кількість рядків у <code>table</code>.


## Examples

### Example #1 
Знайти кількість рядків у таблиці.
```powerquery
Table.RowCount(
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
