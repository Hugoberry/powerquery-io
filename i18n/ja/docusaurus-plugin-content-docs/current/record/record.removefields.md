---
title: Record.RemoveFields
---

# Record.RemoveFields


指定されたフィールドを入力レコードから削除します。


## Syntax

```powerquery
Record.RemoveFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Remarks

入力 `fields` からリスト `record` で指定されたすべてのフィールドを削除したレコードを返します。指定されたフィールドが存在しない場合は、エラーが発生します。


## Examples

### Example #1
レコードからフィールド "Price" を削除します。
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], "Price")
```

Result: 
```powerquery
[CustomerID = 1, Item = "Fishing rod"]
```


### Example #2
レコードからフィールド "Price" と "Item" を削除します。
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], {"Price", "Item"})
```

Result: 
```powerquery
[CustomerID = 1]
```




## Category
Record.Transformations
