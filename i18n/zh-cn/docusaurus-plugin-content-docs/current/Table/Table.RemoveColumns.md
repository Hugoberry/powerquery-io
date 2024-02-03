---
title: Table.RemoveColumns
---

# Table.RemoveColumns


## Description

删除指定的列。


## Syntax

```powerquery
Table.RemoveColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Details

从提供的 <code>table</code> 中删除指定的 <code>columns</code>。    如果指定列不存在，则会引发错误，除非可选参数 <code>missingField</code> 指定备用行为(例如，<code>MissingField.UseNull</code> 或 <code>MissingField.Ignore</code>)。


## Examples

### Example #1 
从表中删除列 [Phone]。
```powerquery
Table.RemoveColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "Phone"
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob"]})
```


### Example #2 
尝试从表中删除不存在的列。
```powerquery
Table.RemoveColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "Address"
)
```

Result: 
```powerquery
[Expression.Error] The column 'Address' of the table wasn't found.
```




## Category
Table.Column operations
