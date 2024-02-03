---
title: Record.FieldCount
---

# Record.FieldCount


## Description

레코드의 필드 수를 반환합니다.


## Syntax

```powerquery
Record.FieldCount(
    record as record
) as number
```


## Details

레코드 <code>record</code>의 필드 수를 반환합니다.


## Examples

### Example #1 
레코드의 필드 수를 확인합니다.
```powerquery
Record.FieldCount([CustomerID = 1, Name = "Bob"])
```

Result: 
```powerquery
2
```




## Category
Record.Information
