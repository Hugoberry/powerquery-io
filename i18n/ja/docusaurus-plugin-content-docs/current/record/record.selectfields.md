---
title: Record.SelectFields
---

# Record.SelectFields


指定されたフィールドのみを含むレコードを返します。


## Syntax

```powerquery
Record.SelectFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Remarks

入力 `record` からリスト `fields` で指定されたフィールドのみを含むレコードを返します。


## Examples

### Example #1
レコード内のフィールド "Item" と "Price" を選択します。
```powerquery
Record.SelectFields(
    [OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0],
    {"Item", "Price"}
)
```

Result: 
```powerquery
[Item = "Fishing rod", Price = 100]
```




## Category
Record.Selection
