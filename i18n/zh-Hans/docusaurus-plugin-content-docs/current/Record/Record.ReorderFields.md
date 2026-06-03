---
title: Record.ReorderFields
---

# Record.ReorderFields


对记录字段重新排序，以匹配字段名称列表的顺序。


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

对记录的字段重新排序，以匹配字段名称列表的顺序。

-   `record`: 包含要重新排序的字段的记录。
-   `fieldOrder`: 包含要应用于记录的字段的新顺序的列表。保留字段值，并且未在此参数中列出的字段保留在其原始位置。
-   `missingField`: 指定包含字段数少于预期的行中缺失值的预期操作。以下值有效:
    -   `MissingField.Error`: (默认值)指示缺少字段将导致错误。如果未为 `missingField` 参数输入任何值，则使用此值。
    -   `MissingField.Ignore`: 指示应忽略缺少的字段。
    -   `MissingField.UseNull`: 指示应将缺少的字段作为 `null` 值包含在内。


## Examples

### Example #1
将记录中的部分字段重新排序。
```powerquery
Record.ReorderFields(
    [CustomerID = 1, OrderID = 1, Item = "Fishing rod", Price = 100.0],
    {"OrderID", "CustomerID"}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0]
```


### Example #2
对记录中的某些字段重新排序，并为任何缺少的字段包含 `null`。
```powerquery
let
    Source = [CustomerID = 3, First Name = "Paul", Phone = "543-7890", Purchase = "Fishing Rod"],
    reorderedRecord = Record.ReorderFields(
        Source,
        {"Purchase", "Last Name", "First Name"},
        MissingField.UseNull
    )
in
    reorderedRecord
```

Result: 
```powerquery
[CustomerID = 3, Purchase = "Fishing Rod", Phone = "543-7890", Last Name = null, First Name = "Paul"]
```




## Category
Record.Transformations
