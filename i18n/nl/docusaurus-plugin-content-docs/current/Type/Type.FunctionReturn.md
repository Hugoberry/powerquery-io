---
title: Type.FunctionReturn
---

# Type.FunctionReturn


Retourneert een type dat wordt geretourneerd door een functietype.


## Syntax

```powerquery
Type.FunctionReturn(
    type as type
) as type
```


## Remarks

Retourneert een type dat wordt geretourneerd door een functie <code>type</code>.


## Examples

### Example #1 
Zoek het retourtype van &lt;code&gt;() als willekeurig)&lt;/code&gt;.
```powerquery
Type.FunctionReturn(type function () as any)
```

Result: 
```powerquery
type any
```




## Category
Type
