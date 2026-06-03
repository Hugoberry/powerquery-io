---
title: Type.FunctionReturn
---

# Type.FunctionReturn


関数型によって返される型を返します。


## Syntax

```powerquery
Type.FunctionReturn(
    type as type
) as type
```


## Remarks

関数 `type` によって返される型を返します。


## Examples

### Example #1
`() as any)` の戻り値の型を検索します。
```powerquery
Type.FunctionReturn(type function () as any)
```

Result: 
```powerquery
type any
```




## Category
Type
