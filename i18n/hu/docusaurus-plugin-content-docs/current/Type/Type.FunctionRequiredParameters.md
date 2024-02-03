---
title: Type.FunctionRequiredParameters
---

# Type.FunctionRequiredParameters


## Description

Egy function típusú függvény meghívásához szükséges paraméterek minimális számának visszaadása.


## Syntax

```powerquery
Type.FunctionRequiredParameters(
    type as type
) as number
```


## Details

A függvény visszaadja a(z) <code>type</code> paraméterben megadott függvénytípus kötelező paramétereinek számát.


## Examples

### Example #1 
Az &lt;code&gt;(x as number, optional y as text)&lt;/code&gt; függvény kötelező paraméterei számának megkeresése.
```powerquery
Type.FunctionRequiredParameters(type function (x as number, optional y as text) as any)
```

Result: 
```powerquery
1
```




## Category
Type
