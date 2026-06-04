---
title: Type.IsNullable
---

# Type.IsNullable


형식이 nullable 형식이면 true를 반환하고, 그렇지 않으면 false를 반환합니다.


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Remarks

형식이 `nullable` 형식이면 `true`를 반환하고, 그렇지 않으면 `false`를 반환합니다.


## Examples

### Example #1
`숫자`가 nullable 형식인지 확인합니다.
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2
`nullable 형식 숫자`가 nullable 형식인지 확인합니다.
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
