---
title: Record.RemoveFields
---

# Record.RemoveFields


입력 레코드에서 지정된 필드를 제거합니다.


## Syntax

```powerquery
Record.RemoveFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Remarks

입력 `fields`의 목록 `record`에 지정된 모든 필드를 제거하는 레코드를 반환합니다. 지정한 필드가 없으면 오류가 발생합니다.


## Examples

### Example #1
레코드에서 필드 "Price"를 제거합니다.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], "Price")
```

Result: 
```powerquery
[CustomerID = 1, Item = "Fishing rod"]
```


### Example #2
레코드에서 필드 "Price" 및 "Item"을 제거합니다.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], {"Price", "Item"})
```

Result: 
```powerquery
[CustomerID = 1]
```




## Category
Record.Transformations
