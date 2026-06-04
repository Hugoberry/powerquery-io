---
title: Type.FunctionReturn
---

# Type.FunctionReturn


함수 형식별로 반환되는 형식을 반환합니다.


## Syntax

```powerquery
Type.FunctionReturn(
    type as type
) as type
```


## Remarks

함수 `type`별로 반환되는 형식을 반환합니다.


## Examples

### Example #1
`() as any)`의 반환 형식을 확인합니다.
```powerquery
Type.FunctionReturn(type function () as any)
```

Result: 
```powerquery
type any
```




## Category
Type
