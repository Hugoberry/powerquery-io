---
title: Number.Permutations
---

# Number.Permutations


Devolve o número de permutações.


## Syntax

```powerquery
Number.Permutations(
    setSize as number,
    permutationSize as number
) as number
```


## Remarks

Devolve o número de permutações que podem ser geradas a partir de um número de itens, <code>setSize</code>, com um tamanho de permutação especificado, <code>permutationSize</code>.


## Examples

### Example #1 
Determinar o número de permutações existentes num total de 5 itens em grupos de 3.
```powerquery
Number.Permutations(5, 3)
```

Result: 
```powerquery
60
```




## Category
Number.Operations
