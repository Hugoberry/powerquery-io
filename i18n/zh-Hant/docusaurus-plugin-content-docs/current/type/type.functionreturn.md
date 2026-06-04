---
title: Type.FunctionReturn
---

# Type.FunctionReturn


傳回由函數類型傳回的類型。


## Syntax

```powerquery
Type.FunctionReturn(
    type as type
) as type
```


## Remarks

傳回由函數 `type` 傳回的類型。


## Examples

### Example #1
尋找 `() as any)` 的傳回類型。
```powerquery
Type.FunctionReturn(type function () as any)
```

Result: 
```powerquery
type any
```




## Category
Type
