---
title: Record.FieldNames
---

# Record.FieldNames


## Description

필드의 이름을 반환합니다.


## Syntax

```powerquery
Record.FieldNames(
    record as record
) as list
```


## Details

레코드 <code>record</code>의 필드 이름을 텍스트로 반환합니다.


## Examples

### Example #1 
레코드의 필드 이름을 확인합니다.
```powerquery
Record.FieldNames([OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0])
```

Result: 
```powerquery
{"OrderID", "CustomerID", "Item", "Price"}
```




## Category
Record.Selection
