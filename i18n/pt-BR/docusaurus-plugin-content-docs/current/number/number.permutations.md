---
title: Number.Permutations
---

# Number.Permutations


Retorna o número de permutações.


## Syntax

```powerquery
Number.Permutations(
    setSize as number,
    permutationSize as number
) as number
```


## Remarks

Retorna o número de permutações que podem ser geradas a partir de um número de itens, <code>setSize</code>, com um tamanho de permutação especificado, <code>permutationSize</code>.


## Examples

### Example #1 
Localize o número de permutações em um total de cinco itens em grupos de três.
```powerquery
Number.Permutations(5, 3)
```

Result: 
```powerquery
60
```




## Category
Number.Operations
