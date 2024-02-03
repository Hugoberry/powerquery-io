---
title: Table.RemoveColumns
---

# Table.RemoveColumns


## Description

指定された列を削除します。


## Syntax

```powerquery
Table.RemoveColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Details

指定された <code>table</code> から、指定された <code>columns</code> を削除します。    指定された列が存在しない場合は、省略可能なパラメーターの <code>missingField</code> で代替動作 (<code>MissingField.UseNull</code>、<code>MissingField.Ignore</code> など) が指定されていない限り、エラーが発生します。


## Examples

### Example #1 
列 [Phone] をテーブルから削除します。
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
