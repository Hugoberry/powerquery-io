---
title: Record.SelectFields
---

# Record.SelectFields


## Description

지정된 필드만 포함하는 레코드를 반환합니다.


## Syntax

```powerquery
Record.SelectFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Details

입력 <code>record</code>의 목록 <code>fields</code>에 지정된 필드만 포함하는 레코드를 반환합니다.


## Examples

### Example #1 
레코드의 필드 &#34;Item&#34; 및 &#34;Price&#34;를 선택합니다.
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
