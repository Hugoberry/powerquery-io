---
title: Type.ForFunction
---

# Type.ForFunction


## Description

Devolve um tipo que representa funções com restrições de parâmetro e tipo de retorno específicas.


## Syntax

```powerquery
Type.ForFunction(
    signature as record,
    min as number
) as type
```


## Details

Cria um <code>function type</code> a partir de <code>signature</code>, um registo de <code>ReturnType</code> e <code>Parameters</code> e <code>min</code>, o número mínimo de argumentos necessários para invocar a função.


## Examples

### Example #1 
Cria o tipo para uma função que toma um parâmetro numérico chamado X e devolve um número.
```powerquery
Type.ForFunction([ReturnType = type number, Parameters = [X = type number]], 1)
```

Result: 
```powerquery
type function (X as number) as number
```




## Category
Type
