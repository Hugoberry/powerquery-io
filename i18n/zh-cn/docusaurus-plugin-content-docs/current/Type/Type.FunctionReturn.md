---
title: Type.FunctionReturn
---

# Type.FunctionReturn


## Description

返回由函数类型返回的类型。


## Syntax

```powerquery
Type.FunctionReturn(
    type as type
) as type
```


## Details

返回由函数 <code>type</code> 返回的类型。


## Examples

### Example #1 
找到 &lt;code&gt;() as any)&lt;/code&gt; 的返回类型。
```powerquery
Type.FunctionReturn(type function () as any)
```

Result: 
```powerquery
type any
```




## Category
Type
