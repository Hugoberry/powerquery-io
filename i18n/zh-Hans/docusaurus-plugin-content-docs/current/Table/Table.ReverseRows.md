---
title: Table.ReverseRows
---

# Table.ReverseRows


返回一个表，其中的行以相反顺序排序。


## Syntax

```powerquery
Table.ReverseRows(
    table as table
) as table
```


## Remarks

从输入 <code>table</code> 返回一个表，其中的行遵循相反顺序。


## Examples

### Example #1 
使表中的行按相反顺序排列。
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
