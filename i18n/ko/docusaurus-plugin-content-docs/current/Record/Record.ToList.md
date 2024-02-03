---
title: Record.ToList
---

# Record.ToList


## Description

입력 레코드의 필드 값을 포함하는 값 목록을 반환합니다.


## Syntax

```powerquery
Record.ToList(
    record as record
) as list
```


## Details

입력 <code>record</code>의 필드 값을 포함하는 값 목록을 반환합니다.


## Examples

### Example #1 
레코드에서 필드 값을 추출합니다.
```powerquery
Record.ToList([A = 1, B = 2, C = 3])
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
Record.Serialization
