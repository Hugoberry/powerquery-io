---
title: List.ReplaceMatchingItems
---

# List.ReplaceMatchingItems


Aplica cada substituição de \{ old, new }.


## Syntax

```powerquery
List.ReplaceMatchingItems(
    list as list,
    replacements as list,
    optional equationCriteria as any
) as list
```


## Remarks

Efetua as substituições especificadas na lista <code>list</code>. Uma operação de substituição <code>replacements</code> é composta por uma lista de dois valores, o valor antigo e o valor novo, fornecidos numa lista.    É possível especificar um valor de critério de equação opcional, <code>equationCriteria</code>, para controlar o teste de igualdade.


## Examples

### Example #1 
Criar uma lista a partir de \{1, 2, 3, 4, 5} substituindo o valor 5 por -5 e o valor 1 por -1.
```powerquery
List.ReplaceMatchingItems({1, 2, 3, 4, 5}, {{5, -5}, {1, -1}})
```

Result: 
```powerquery
{-1, 2, 3, 4, -5}
```




## Category
List.Transformation functions
