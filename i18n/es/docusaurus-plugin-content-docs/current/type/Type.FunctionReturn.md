---
title: Type.FunctionReturn
---

# Type.FunctionReturn


Devuelve un tipo devuelto por un tipo de función.


## Syntax

```powerquery
Type.FunctionReturn(
    type as type
) as type
```


## Remarks

Devuelve un tipo devuelto por una función <code>type</code>.


## Examples

### Example #1 
Buscar el tipo devuelto de &lt;code&gt;() as any)&lt;/code&gt;.
```powerquery
Type.FunctionReturn(type function () as any)
```

Result: 
```powerquery
type any
```




## Category
Type
