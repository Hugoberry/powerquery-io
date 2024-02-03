---
title: Type.FunctionReturn
---

# Type.FunctionReturn


## Description

Returnează un tip returnat de un tip de funcție.


## Syntax

```powerquery
Type.FunctionReturn(
    type as type
) as type
```


## Details

Returnează un tip returnat de o funcție <code>type</code>.


## Examples

### Example #1 
Găsiți tipul returnat de &lt;code&gt;() ca any)&lt;/code&gt;.
```powerquery
Type.FunctionReturn(type function () as any)
```

Result: 
```powerquery
type any
```




## Category
Type
