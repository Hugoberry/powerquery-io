---
title: Table.SelectRowsWithErrors
---

# Table.SelectRowsWithErrors


## Description

返回一个表，其中只具有输入表中的在至少一个单元中包含错误的那些行。如果指定了列列表，则只检查指定列中的单元内是否有错误。


## Syntax

```powerquery
Table.SelectRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Details

返回一个表，其中只具有输入表中的在至少一个单元中包含错误的那些行。如果指定了列列表，则只检查指定列中的单元内是否有错误。


## Examples

### Example #1 
选择其行中包含错误的客户的名称。
```powerquery
Table.SelectRowsWithErrors(
    Table.FromRecords({
        [CustomerID = ..., Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    })
)[Name]
```

Result: 
```powerquery
{"Bob"}
```




## Category
Table.Row operations
