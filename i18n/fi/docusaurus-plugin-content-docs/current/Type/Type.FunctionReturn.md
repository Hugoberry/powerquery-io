---
title: Type.FunctionReturn
---

# Type.FunctionReturn


## Description

Palauttaa funktiotyypin palauttaman tyypin.


## Syntax

```powerquery
Type.FunctionReturn(
    type as type
) as type
```


## Details

Palauttaa funktion <code>type</code> palauttaman tyypin.


## Examples

### Example #1 
Etsi kohteen &lt;code&gt;() as any)&lt;/code&gt; palautustyyppi.
```powerquery
Type.FunctionReturn(type function () as any)
```

Result: 
```powerquery
type any
```




## Category
Type
