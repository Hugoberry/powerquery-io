---
title: Type.ForFunction
---

# Type.ForFunction


Retorna um tipo que representa funções com parâmetro específico e restrições de tipo de retorno


## Syntax

```powerquery
Type.ForFunction(
    signature as record,
    min as number
) as type
```


## Remarks

Cria um <code>tipo de função</code> de <code>signature</code>, um registro de <code>ReturnType</code> e <code>Parâmetros</code>, e <code>min</code>, o número mínimo de argumentos necessários para invocar a função.


## Examples

### Example #1 
Cria o tipo para uma função que aceita um parâmetro de número denominado X e retorna um número.
```powerquery
Type.ForFunction([ReturnType = type number, Parameters = [X = type number]], 1)
```

Result: 
```powerquery
type function (X as number) as number
```




## Category
Type
