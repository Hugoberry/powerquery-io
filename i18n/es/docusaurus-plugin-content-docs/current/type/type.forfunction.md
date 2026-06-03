---
title: Type.ForFunction
---

# Type.ForFunction


Devuelve un tipo que representa las funciones con restricciones concretas de tipo de devolución y parámetros.


## Syntax

```powerquery
Type.ForFunction(
    signature as record,
    min as number
) as type
```


## Remarks

Crea `function type` de `signature`, un registro de `ReturnType` y `Parameters` y `min`, el número mínimo de argumentos necesarios para invocar la función.


## Examples

### Example #1
Crea el tipo para una función que toma un parámetro de número denominado X y devuelve un número.
```powerquery
Type.ForFunction([ReturnType = type number, Parameters = [X = type number]], 1)
```

Result: 
```powerquery
type function (X as number) as number
```




## Category
Type
