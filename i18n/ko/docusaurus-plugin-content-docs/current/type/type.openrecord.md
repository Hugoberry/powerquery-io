---
title: Type.OpenRecord
---

# Type.OpenRecord


지정한 레코드 형식의 열린 버전을 반환합니다(이미 열려 있는 경우에는 동일한 형식).


## Syntax

```powerquery
Type.OpenRecord(
    type as type
) as type
```


## Remarks

지정한 `레코드` `type`의 열린 버전을 반환합니다(이미 열려 있는 경우에는 동일한 형식).


## Examples

### Example #1
`type [ A = number]`의 열린 버전을 만듭니다.
```powerquery
Type.OpenRecord(type [A = number])
```

Result: 
```powerquery
type [A = number, ...]
```




## Category
Type
