---
title: Table.RemoveColumns
---

# Table.RemoveColumns


指定された列を削除します。


## Syntax

```powerquery
Table.RemoveColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

指定された `table` から、指定された `columns` を削除します。 指定された列が存在しない場合は、省略可能なパラメーターの `missingField` で代替動作 (`MissingField.UseNull`、`MissingField.Ignore` など) が指定されていない限り、エラーが発生します。


## Examples

### Example #1
列 \[Phone\] をテーブルから削除します。
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
存在しない列をテーブルから削除しようとしてみてください。
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
