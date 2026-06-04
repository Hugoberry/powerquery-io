---
title: Type.FunctionRequiredParameters
---

# Type.FunctionRequiredParameters


Egy function típusú függvény meghívásához szükséges paraméterek minimális számának visszaadása.


## Syntax

```powerquery
Type.FunctionRequiredParameters(
    type as type
) as number
```


## Remarks

A függvény visszaadja a(z) `type` paraméterben megadott függvénytípus kötelező paramétereinek számát.


## Examples

### Example #1
Az `(x as number, optional y as text)` függvény kötelező paraméterei számának megkeresése.
```powerquery
Type.FunctionRequiredParameters(type function (x as number, optional y as text) as any)
```

Result: 
```powerquery
1
```




## Category
Type
