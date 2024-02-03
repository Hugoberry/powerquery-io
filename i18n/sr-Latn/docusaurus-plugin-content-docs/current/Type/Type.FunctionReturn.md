---
title: Type.FunctionReturn
---

# Type.FunctionReturn


## Description

Vraća tip koji daje tip funkcije.


## Syntax

```powerquery
Type.FunctionReturn(
    type as type
) as type
```


## Details

Vraća tip koji daje funkcija <code>type</code>.


## Examples

### Example #1 
Pronađite tip vraćanja za &lt;code&gt;() as any)&lt;/code&gt;.
```powerquery
Type.FunctionReturn(type function () as any)
```

Result: 
```powerquery
type any
```




## Category
Type
