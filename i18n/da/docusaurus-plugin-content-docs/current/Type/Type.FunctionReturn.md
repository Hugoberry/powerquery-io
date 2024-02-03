---
title: Type.FunctionReturn
---

# Type.FunctionReturn


## Description

Returnerer en type, der returneres af en funktionstype.


## Syntax

```powerquery
Type.FunctionReturn(
    type as type
) as type
```


## Details

Returnerer en type, der returneres af en funktion <code>type</code>.


## Examples

### Example #1 
Find returneringstypen for &lt;code&gt;() as any)&lt;/code&gt;.
```powerquery
Type.FunctionReturn(type function () as any)
```

Result: 
```powerquery
type any
```




## Category
Type
