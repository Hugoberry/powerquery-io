---
title: Type.FunctionParameters
---

# Type.FunctionParameters


Devuelve un registro con valores de campo establecidos en el nombre de los parámetros de un tipo de función, y sus valores establecidos en sus tipos correspondientes.


## Syntax

```powerquery
Type.FunctionParameters(
    type as type
) as record
```


## Remarks

Devuelve un registro con los valores de campo establecidos en el nombre de los parámetros de `type`, y sus valores establecidos en sus tipos correspondientes.


## Examples

### Example #1
Buscar los tipos de los parámetros para la función `(x as number, y as text)`.
```powerquery
Type.FunctionParameters(type function (x as number, y as text) as any)
```

Result: 
```powerquery
[x = type number, y = type text]
```




## Category
Type
