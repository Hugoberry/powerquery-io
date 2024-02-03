---
title: Type.ForFunction
---

# Type.ForFunction


## Description

返回一个类型，此类型表示具有特定参数的函数和返回类型约束。


## Syntax

```powerquery
Type.ForFunction(
    signature as record,
    min as number
) as type
```


## Details

从 <code>signature</code>、<code>ReturnType</code> 和 <code>Parameters</code>、<code>min</code> 以及调用函数所需参数的最小数目中创建 <code>function type</code>。


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
