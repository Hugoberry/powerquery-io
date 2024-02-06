---
title: Table.ReorderColumns
---

# Table.ReorderColumns


返回一个表，其中的列遵循指定的顺序。


## Syntax

```powerquery
Table.ReorderColumns(
    table as table,
    columnOrder as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

从输入 <code>table</code> 返回一个表，其中的列遵循由 <code>columnOrder</code> 指定的顺序。列表中未指定的列将不重新排序。     如果此列不存在，将引发异常，除非可选参数 <code>missingField</code> 指定备用值(例如，<code>MissingField.UseNull</code> 或 <code>MissingField.Ignore</code>)。


## Examples

### Example #1 
切换表中列 [Phone] 和 [Name] 的顺序。
```powerquery
Table.ReorderColumns(
    Table.FromRecords({[CustomerID = 1, Phone = "123-4567", Name = "Bob"]}),
    {"Name", "Phone"}
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #2 
切换表中列 [Phone] 和 [Address] 的顺序或使用 &#34;MissingField.Ignore&#34;。这不会更改表，因为列 [Address] 不存在。
```powerquery
Table.ReorderColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"Phone", "Address"},
    MissingField.Ignore
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Column operations
