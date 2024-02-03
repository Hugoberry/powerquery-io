---
title: Record.FieldValues
---

# Record.FieldValues


## Description

필드 값의 목록을 반환합니다.


## Syntax

```powerquery
Record.FieldValues(
    record as record
) as list
```


## Details

레코드 <code>record</code>에 있는 필드 값의 목록을 반환합니다.


## Examples

### Example #1 
레코드의 필드 값을 확인합니다.
```powerquery
Record.FieldValues([CustomerID = 1, Name = "Bob", Phone = "123-4567"])
```

Result: 
```powerquery
{1, "Bob", "123-4567"}
```




## Category
Record.Selection
