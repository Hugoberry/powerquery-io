---
title: Type.FunctionReturn
---

# Type.FunctionReturn


## Description

Egy adott function típusú konstrukció visszatérési típusának visszaadása.


## Syntax

```powerquery
Type.FunctionReturn(
    type as type
) as type
```


## Details

A(z) <code>type</code> paraméterben megadott függvény visszatérési típusának visszaadása.


## Examples

### Example #1 
Az &lt;code&gt;() as any)&lt;/code&gt; függvény visszatérési típusának megkeresése.
```powerquery
Type.FunctionReturn(type function () as any)
```

Result: 
```powerquery
type any
```




## Category
Type
