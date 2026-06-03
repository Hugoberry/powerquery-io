---
title: Record.TransformFields
---

# Record.TransformFields


指定された変換を適用したレコードを返します。


## Syntax

```powerquery
Record.TransformFields(
    record as record,
    transformOperations as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

リスト `transformOperations` で指定された変換を `record` に適用したレコードを返します。 一度に 1 つまたは複数のフィールドを変換できます。

1 つのフィールドを変換する場合、`transformOperations` は 2 つの項目を含むリストである必要があります。`transformOperations` の最初の項目にはフィールド名を指定し、`transformOperations` の 2 番目の項目には変換に使用する関数を指定します。たとえば、`{"Quantity", Number.FromText}` のように指定します

複数のフィールドを変換する場合、`transformOperations` はリストのリストである必要があります。入れ子のリストはそれぞれフィールド名と変換操作のペアで構成します。たとえば、`{{"Quantity",Number.FromText},{"UnitPrice", Number.FromText}}` のように指定します


## Examples

### Example #1
"Price" フィールドを数値に変換します。
```powerquery
Record.TransformFields(
    [OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = "100.0"],
    {"Price", Number.FromText}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100]
```


### Example #2
"OrderID" フィールドと "Price" フィールドを数値に変換します。
```powerquery
Record.TransformFields(
    [OrderID = "1", CustomerID = 1, Item = "Fishing rod", Price = "100.0"],
    {{"OrderID", Number.FromText}, {"Price", Number.FromText}}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100]
```




## Category
Record.Transformations
