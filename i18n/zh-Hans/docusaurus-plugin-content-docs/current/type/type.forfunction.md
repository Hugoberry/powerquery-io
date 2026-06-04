---
title: Type.ForFunction
---

# Type.ForFunction


返回一个类型，此类型表示具有特定参数的函数和返回类型约束。


## Syntax

```powerquery
Type.ForFunction(
    signature as record,
    min as number
) as type
```


## Remarks

从 `signature`、`ReturnType` 和 `Parameters`、`min` 以及调用函数所需参数的最小数目中创建 `function type`。


## Examples

### Example #1
为需要使用 X 数字参数并返回数字的函数创建类型。
```powerquery
Type.ForFunction([ReturnType = type number, Parameters = [X = type number]], 1)
```

Result: 
```powerquery
type function (X as number) as number
```




## Category
Type
