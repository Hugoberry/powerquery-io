---
title: Record.TransformFields
---

# Record.TransformFields


应用指定的转换后返回一个记录。


## Syntax

```powerquery
Record.TransformFields(
    record as record,
    transformOperations as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

将列表 `transformOperations` 中指定的转换应用到 `record` 后返回一个记录。 一次可以转换一个或多个字段。

在转换单个字段时，要求 `transformOperations` 是包含两项的列表。`transformOperations` 中的第一项指定字段名称，`transformOperations` 中的第二项指定要用于转换的函数。例如 `{"Quantity", Number.FromText}`

在转换多个字段时，要求 `transformOperations` 是列表的列表，其中每个里面的列表是一对字段名称和转换操作。例如 `{{"Quantity",Number.FromText},{"UnitPrice", Number.FromText}}`


## Examples

### Example #1
将 "Price" 字段转换为数字。
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
将 "OrderID" 和 "Price" 字段转换为数字。
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
