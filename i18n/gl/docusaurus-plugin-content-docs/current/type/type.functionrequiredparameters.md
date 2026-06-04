---
title: Type.FunctionRequiredParameters
---

# Type.FunctionRequiredParameters


Devolve un número que indica o número mínimo de parámetros requiridos para invocar o tipo de función.


## Syntax

```powerquery
Type.FunctionRequiredParameters(
    type as type
) as number
```


## Remarks

Devolve un número que indica o número mínimo de parámetros requiridos para invocar a entrada `type` da función.


## Examples

### Example #1
Busque o número de parámetros requiridos para a función `(x como número, y opcional como texto)`.
```powerquery
Type.FunctionRequiredParameters(type function (x as number, optional y as text) as any)
```

Result: 
```powerquery
1
```




## Category
Type
