---
title: Record.RenameFields
---

# Record.RenameFields


\{ old, new \} 형식의 목록에서 이름 바꾸기를 적용합니다.


## Syntax

```powerquery
Record.RenameFields(
    record as record,
    renames as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

입력 `record`의 필드를 목록 `renames`에 지정된 새 필드 이름으로 바꾼 후 레코드를 반환합니다. 여러 이름 바꾸기의 경우 중첩된 목록을 사용할 수 있습니다(\{ \{old1, new1\}, \{old2, new2\} \}).


## Examples

### Example #1
레코드에서 필드 "UnitPrice"의 이름을 "Price"로 바꿉니다.
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
레코드에서 필드 "UnitPrice"의 이름을 "Price"로 바꾸고 "OrderNum"의 이름을 "OrderID"로 바꿉니다.
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
