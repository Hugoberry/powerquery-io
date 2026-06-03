---
title: Type.FunctionRequiredParameters
---

# Type.FunctionRequiredParameters


Devuelve un número que indica el número mínimo de parámetros necesarios para invocar el tipo de función.


## Syntax

```powerquery
Type.FunctionRequiredParameters(
    type as type
) as number
```


## Remarks

Devuelve un número que indica el número mínimo de parámetros necesarios para invocar la entrada `type` de función.


## Examples

### Example #1
Buscar el número de parámetros necesarios para la función `(x as number, optional y as text)`.
```powerquery
Type.FunctionRequiredParameters(type function (x as number, optional y as text) as any)
```

Result: 
```powerquery
1
```




## Category
Type
