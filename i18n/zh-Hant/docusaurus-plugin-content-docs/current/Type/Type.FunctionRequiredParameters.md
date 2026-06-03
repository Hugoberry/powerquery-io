---
title: Type.FunctionRequiredParameters
---

# Type.FunctionRequiredParameters


傳回數字，表示叫用函數類型所需的最少參數數目。


## Syntax

```powerquery
Type.FunctionRequiredParameters(
    type as type
) as number
```


## Remarks

傳回數字，表示叫用函數輸入 `type` 所需的最少參數數目。


## Examples

### Example #1
尋找函數 `(x as number, optional y as text)` 的必要參數數目。
```powerquery
Type.FunctionRequiredParameters(type function (x as number, optional y as text) as any)
```

Result: 
```powerquery
1
```




## Category
Type
