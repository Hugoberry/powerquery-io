---
title: Type.FunctionReturn
---

# Type.FunctionReturn


## Description

Returnerar en typ som returnerats av en funktionstyp.


## Syntax

```powerquery
Type.FunctionReturn(
    type as type
) as type
```


## Details

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
