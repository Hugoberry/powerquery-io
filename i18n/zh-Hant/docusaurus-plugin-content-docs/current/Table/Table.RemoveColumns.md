---
title: Table.RemoveColumns
---

# Table.RemoveColumns


移除指定的資料行。


## Syntax

```powerquery
Table.RemoveColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

從 `table` 提供的 中移除指定的 `columns`。 如果指定的資料行不存在，就會引發錯誤，除非選用參數 `missingField` 指定了替代行為 (例如 `MissingField.UseNull` 或 `MissingField.Ignore`)。


## Examples

### Example #1
從資料表中移除 \[Phone\] 資料行。
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
嘗試從資料表移除不存在的資料行。
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
