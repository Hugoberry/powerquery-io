---
title: Type.FunctionParameters
---

# Type.FunctionParameters


Returnează o înregistrare cu valori de câmp setate la numele parametrilor unui tip de funcție, iar valorile lor setate la tipurile corespunzătoare.


## Syntax

```powerquery
Type.FunctionParameters(
    type as type
) as record
```


## Remarks

Returnează o înregistrare cu valori de câmp setate la numele parametrilor `type`, iar valorile lor setate la tipurile corespunzătoare.


## Examples

### Example #1
Găsiți tipurile parametrilor funcției `(x as number, y as text)`.
```powerquery
Type.FunctionParameters(type function (x as number, y as text) as any)
```

Result: 
```powerquery
[x = type number, y = type text]
```




## Category
Type
