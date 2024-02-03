---
title: Type.FunctionReturn
---

# Type.FunctionReturn


## Description

傳回由函數類型傳回的類型。


## Syntax

```powerquery
Type.FunctionReturn(
    type as type
) as type
```


## Details

傳回由函數 <code>type</code> 傳回的類型。


## Examples

### Example #1 
尋找 &lt;code&gt;() as any)&lt;/code&gt; 的傳回類型。
```powerquery
Type.FunctionReturn(type function () as any)
```

Result: 
```powerquery
type any
```




## Category
Type
