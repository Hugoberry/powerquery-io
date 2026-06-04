---
title: Type.FunctionParameters
---

# Type.FunctionParameters


Retorna un registre amb valors de camp establerts al nom dels paràmetres d'un tipus de funció, i els seus valors establerts als tipus corresponents.


## Syntax

```powerquery
Type.FunctionParameters(
    type as type
) as record
```


## Remarks

Retorna un registre amb valors de camp establerts al nom dels paràmetres de `type`, i els seus valors establerts als tipus corresponents.


## Examples

### Example #1
Cerqueu els tipus de paràmetres de la funció `(x as number, y as text)`.
```powerquery
Type.FunctionParameters(type function (x as number, y as text) as any)
```

Result: 
```powerquery
[x = type number, y = type text]
```




## Category
Type
