---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


레코드 형식이 열려 있는지 여부를 반환합니다.


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Remarks

레코드 `type`이(가) 열려 있는지 여부를 나타내는 `논리값`을 반환합니다.


## Examples

### Example #1
`type [ A = number, ...]` 레코드가 열려 있는지 확인합니다.
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
