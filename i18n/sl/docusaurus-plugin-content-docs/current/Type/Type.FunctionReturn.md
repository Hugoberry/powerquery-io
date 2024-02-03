---
title: Type.FunctionReturn
---

# Type.FunctionReturn


## Description

Vrne vrsto, ki jo vrne vrsta funkcije.


## Syntax

```powerquery
Type.FunctionReturn(
    type as type
) as type
```


## Details

Vrne vrsto, ki jo vrne funkcija <code>type</code>.


## Examples

### Example #1 
Poiščite vrsto vrnitve &lt;code&gt;() as any)&lt;/code&gt;.
```powerquery
Type.FunctionReturn(type function () as any)
```

Result: 
```powerquery
type any
```




## Category
Type
