---
title: Table.Split
---

# Table.Split


使用指定页面大小将指定表拆分为一系列表。


## Syntax

```powerquery
Table.Split(
    table as table,
    pageSize as number
) as list
```


## Remarks

将 <code>table</code> 拆分为一系列表，其中列表的第一个元素是包含源表中前 <code>pageSize</code> 个元素的表，    列表的下一个元素是包含源表中接下来 <code>pageSize</code> 个元素的表，以此类推。


## Examples

### Example #1 
将包含五条记录的表拆分为各含两条记录的表。
```powerquery
let
    Customers = Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Cristina", Phone = "232-1550"],
        [CustomerID = 5, Name = "Anita", Phone = "530-1459"]
    })
in
    Table.Split(Customers, 2)
```

Result: 
```powerquery
{
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    }),
    Table.FromRecords({
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Cristina", Phone = "232-1550"]
    }),
    Table.FromRecords({
        [CustomerID = 5, Name = "Anita", Phone = "530-1459"]
    })
}
```




## Category
Table.Transformation
