---
title: Record.RenameFields
---

# Record.RenameFields


\{ old, new \} という形式のリストを使用して、名前の変更を適用します。


## Syntax

```powerquery
Record.RenameFields(
    record as record,
    renames as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

入力 `record` 内のフィールドの名前を、リスト `renames` で指定された新しいフィールド名に変更したレコードを返します。複数の名前を変更する場合は、入れ子になったリスト (\{ \{old1, new1\}, \{old2, new2\} \}) を使用します。


## Examples

### Example #1
レコードのフィールド "UnitPrice" の名前を "Price" に変更します。
```powerquery
Record.RenameFields(
    [OrderID = 1, CustomerID = 1, Item = "Fishing rod", UnitPrice = 100.0],
    {"UnitPrice", "Price"}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0]
```


### Example #2
レコードのフィールド "UnitPrice" の名前を "Price" に変更し、"OrderNum" の名前を "OrderID" に変更します。
```powerquery
Record.RenameFields(
    [OrderNum = 1, CustomerID = 1, Item = "Fishing rod", UnitPrice = 100.0],
    {
        {"UnitPrice", "Price"},
        {"OrderNum", "OrderID"}
    }
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0]
```




## Category
Record.Transformations
