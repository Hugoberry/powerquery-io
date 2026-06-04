---
title: Type.ListItem
---

# Type.ListItem


목록 형식에서 항목 형식을 반환합니다.


## Syntax

```powerquery
Type.ListItem(
    type as type
) as type
```


## Remarks

목록 `type`에서 항목 형식을 반환합니다.


## Examples

### Example #1
목록 `{number}`에서 항목 형식을 확인합니다.
```powerquery
Type.ListItem(type {number})
```

Result: 
```powerquery
type number
```




## Category
Type
