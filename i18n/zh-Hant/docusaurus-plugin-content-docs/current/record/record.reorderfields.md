---
title: Record.ReorderFields
---

# Record.ReorderFields


重新排列記錄欄位，以符合欄位名稱清單的順序。


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

重新排列記錄的欄位，以符合欄位名稱清單的順序。

-   `record`: 包含要重新排序欄位的記錄。
-   `fieldOrder`: 包含要套用至記錄的新欄位順序的清單。欄位值保持不變，未列在此參數中的欄位將保留在其原始位置。
-   `missingField`: 指定其內含的欄位少於預期的資料列中，對遺漏的值所預計採取的動作。以下值是有效:
    -   `MissingField.Error`: (預設) 表示遺漏的欄位將導致錯誤。如果未為 `missingField` 參數輸入任何值，則將使用此值。
    -   `MissingField.Ignore`: 表示應忽略遺漏的欄位。
    -   `MissingField.UseNull`: 表示遺漏的欄位應包含為 `null` 值。


## Examples

### Example #1
重新排列記錄中的欄位。
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
重新排列記錄中的部分欄位，並針對任何遺漏的欄位包含 `null`。
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
