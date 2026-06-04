---
title: Record.ReorderFields
---

# Record.ReorderFields


필드 이름 목록의 순서와 일치하도록 레코드 필드를 다시 정렬합니다.


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

필드 이름 목록의 순서와 일치하도록 레코드 필드를 다시 정렬합니다.

-   `record`: 다시 정렬할 필드가 포함된 레코드입니다.
-   `fieldOrder`: 레코드에 적용할 필드의 새 순서를 포함하는 목록입니다. 필드 값은 유지 관리되며 이 매개 변수에 나열되지 않은 필드는 원래 위치에 남아 있습니다.
-   `missingField`: 예상보다 적은 필드가 포함된 행에서 누락된 값에 대한 예상 동작을 지정합니다. 다음과 같은 값이 유효합니다.
    -   `MissingField.Error`: (기본값) 필드가 누락되어 오류가 발생함을 나타냅니다. `missingField` 매개 변수에 값을 입력하지 않으면 이 값이 사용됩니다.
    -   `MissingField.Ignore`: 누락된 필드를 무시해야 함을 나타냅니다.
    -   `MissingField.UseNull`: 누락된 필드가 `null` 값으로 포함되어야 함을 나타냅니다.


## Examples

### Example #1
레코드의 일부 필드 순서를 바꿉니다.
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
레코드의 일부 필드 순서를 변경하고 누락된 필드에 대한 `null` 포함합니다.
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
