---
title: Type.FunctionReturn
---

# Type.FunctionReturn


## Description

関数型によって返される型を返します。


## Syntax

```powerquery
Type.FunctionReturn(
    type as type
) as type
```


## Details

関数 <code>type</code> によって返される型を返します。


## Examples

### Example #1 
&lt;code&gt;() as any)&lt;/code&gt; の戻り値の型を検索します。
```powerquery
Type.FunctionReturn(type function () as any)
```

Result: 
```powerquery
type any
```




## Category
Type
