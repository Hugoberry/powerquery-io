---
title: Type.FunctionParameters
---

# Type.FunctionParameters


Devolve un rexistro con valores de campo establecidos no nome dos parámetros dun tipo de función e os seus valores establecidos nos seus tipos correspondentes.


## Syntax

```powerquery
Type.FunctionParameters(
    type as type
) as record
```


## Remarks

Devolve un rexistro con valores de campo establecidos no nome dos parámetros `type`, e os seus valores establecidos nos seus tipos correspondentes.


## Examples

### Example #1
Atope os tipos de parámetros para a función `(x como número, y como texto)`.
```powerquery
Type.FunctionParameters(type function (x as number, y as text) as any)
```

Result: 
```powerquery
[x = type number, y = type text]
```




## Category
Type
