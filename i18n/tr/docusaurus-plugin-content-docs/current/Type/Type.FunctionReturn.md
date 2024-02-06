---
title: Type.FunctionReturn
---

# Type.FunctionReturn


Bir işlev türü tarafından döndürülen bir türü döndürür.


## Syntax

```powerquery
Type.FunctionReturn(
    type as type
) as type
```


## Remarks

Bir <code>type</code> işlevi tarafından döndürülen bir türü döndürür.


## Examples

### Example #1 
&lt;code&gt;() as any)&lt;/code&gt; döndürme türünü bulun.
```powerquery
Type.FunctionReturn(type function () as any)
```

Result: 
```powerquery
type any
```




## Category
Type
