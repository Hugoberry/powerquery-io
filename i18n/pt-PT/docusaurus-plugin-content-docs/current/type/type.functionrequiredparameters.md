---
title: Type.FunctionRequiredParameters
---

# Type.FunctionRequiredParameters


Devolve um número a indicar o número mínimo de parâmetros necessários para invocar o tipo de função.


## Syntax

```powerquery
Type.FunctionRequiredParameters(
    type as type
) as number
```


## Remarks

Devolve um número a indicar o número mínimo de parâmetros necessários para invocar a introdução `type` da função.


## Examples

### Example #1
Encontrar o número de parâmetros necessários para a função `(x as number, optional y as text)`.
```powerquery
Type.FunctionRequiredParameters(type function (x as number, optional y as text) as any)
```

Result: 
```powerquery
1
```




## Category
Type
