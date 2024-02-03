---
title: Type.FunctionRequiredParameters
---

# Type.FunctionRequiredParameters


## Description

返回一个数字，表明调用函数的类型所需参数的最小数量。


## Syntax

```powerquery
Type.FunctionRequiredParameters(
    type as type
) as number
```


## Details

返回一个数字，表明调用函数的输入 <code>type</code> 所需参数的最小数量。


## Examples

### Example #1 
找到函数 &lt;code&gt;(x as number, optional y as text)&lt;/code&gt; 所需参数的数量。
```powerquery
Type.FunctionRequiredParameters(type function (x as number, optional y as text) as any)
```

Result: 
```powerquery
1
```




## Category
Type
