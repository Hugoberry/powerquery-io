---
title: Type.FunctionReturn
---

# Type.FunctionReturn


Returnerar en typ som returnerats av en funktionstyp.


## Syntax

```powerquery
Type.FunctionReturn(
    type as type
) as type
```


## Remarks

Returnerar en typ som returnerats av en funktion <code>type</code>.


## Examples

### Example #1 
Hitta returtypen för &lt;code&gt;() as any)&lt;/code&gt;.
```powerquery
Type.FunctionReturn(type function () as any)
```

Result: 
```powerquery
type any
```




## Category
Type
