---
title: Type.FunctionRequiredParameters
---

# Type.FunctionRequiredParameters


Vraća broj koji označava minimalni broj parametara potrebnih za pozivanje tipa funkcije.


## Syntax

```powerquery
Type.FunctionRequiredParameters(
    type as type
) as number
```


## Remarks

Vraća broj koji označava minimalni broj parametara potrebnih za pozivanje ulaza `type` za funkciju.


## Examples

### Example #1
Pronađite broj potrebnih parametara za funkciju `(x as number, optional y as text)`.
```powerquery
Type.FunctionRequiredParameters(type function (x as number, optional y as text) as any)
```

Result: 
```powerquery
1
```




## Category
Type
