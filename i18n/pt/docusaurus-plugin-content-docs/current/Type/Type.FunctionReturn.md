---
title: Type.FunctionReturn
---

# Type.FunctionReturn


## Description

Returns a type returned by a function type.


## Syntax

```powerquery
Type.FunctionReturn(
    type as type
) as type
```


## Details

Returns a type returned by a function <code>type</code>.


## Examples

### Example #1 
Find the return type of &lt;code&gt;() as any)&lt;/code&gt;.
```powerquery
Type.FunctionReturn(type function () as any)
```

Result: 
```powerquery
type any
```




## Category
Type
