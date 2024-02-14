---
title: Table.ReverseRows
---

# Table.ReverseRows


Возвращает таблицу со строками в обратном порядке.


## Syntax

```powerquery
Table.ReverseRows(
    table as table
) as table
```


## Remarks

Возвращает таблицу со строками из входных данных <code>table</code> в обратном порядке.


## Examples

### Example #1 
Изменение порядка строк в таблице на противоположный.
```powerquery
Table.ReverseRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"]
})
```




## Category
Table.Row operations
