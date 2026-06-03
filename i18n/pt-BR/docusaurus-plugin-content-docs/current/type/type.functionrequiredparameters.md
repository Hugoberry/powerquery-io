---
title: Type.FunctionRequiredParameters
---

# Type.FunctionRequiredParameters


Retorna um número que indica o número mínimo de parâmetros necessários para invocar o tipo de função.


## Syntax

```powerquery
Type.FunctionRequiredParameters(
    type as type
) as number
```


## Remarks

Retorna um número que indica o número mínimo de parâmetros necessários para invocar a entrada `type` da função.


## Examples

### Example #1
Encontre o número de parâmetros necessários para a função `(x como número, opcionalmente como texto)`.
```powerquery
Type.FunctionRequiredParameters(type function (x as number, optional y as text) as any)
```

Result: 
```powerquery
1
```




## Category
Type
