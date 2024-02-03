---
title: Type.ForFunction
---

# Type.ForFunction


## Description

Devolve un tipo que representa as funcións con restricións específicas de tipo de devolución e parámetro.


## Syntax

```powerquery
Type.ForFunction(
    signature as record,
    min as number
) as type
```


## Details

Crea un <code>tipo de función</code> a partir de <code>signature</code>, un rexistro de <code>ReturnType</code> e <code>Parámetros</code> e <code>min</code>, o número mínimo de argumentos requiridos para invocar a función.


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
