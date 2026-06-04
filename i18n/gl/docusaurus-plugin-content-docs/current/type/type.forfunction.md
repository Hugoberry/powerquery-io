---
title: Type.ForFunction
---

# Type.ForFunction


Devolve un tipo que representa as funcións con restricións específicas de tipo de devolución e parámetro.


## Syntax

```powerquery
Type.ForFunction(
    signature as record,
    min as number
) as type
```


## Remarks

Crea un `tipo de función` a partir de `signature`, un rexistro de `ReturnType` e `Parámetros` e `min`, o número mínimo de argumentos requiridos para invocar a función.


## Examples

### Example #1
Crea o tipo para a función que colle un parámetro de número denominado X e devolve un número.
```powerquery
Type.ForFunction([ReturnType = type number, Parameters = [X = type number]], 1)
```

Result: 
```powerquery
type function (X as number) as number
```




## Category
Type
