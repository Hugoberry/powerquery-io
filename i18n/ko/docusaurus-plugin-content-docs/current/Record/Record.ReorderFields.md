---
title: Record.ReorderFields
---

# Record.ReorderFields


## Description

지정된 필드를 새 순서로 다시 정렬합니다.


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Details

<code>record</code>의 필드를 목록 <code>fieldOrder</code>에 지정된 필드 순서대로 다시 정렬한 후 레코드를 반환합니다. 필드 값은 유지되며 <code>fieldOrder</code>에 나열되지 않은 필드는 원래 위치에 유지됩니다.


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




## Category
Record.Transformations
