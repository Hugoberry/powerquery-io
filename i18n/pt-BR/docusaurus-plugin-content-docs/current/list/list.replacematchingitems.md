---
title: List.ReplaceMatchingItems
---

# List.ReplaceMatchingItems


Aplica substituição de \{ old, new \}.


## Syntax

```powerquery
List.ReplaceMatchingItems(
    list as list,
    replacements as list,
    optional equationCriteria as any
) as list
```


## Remarks

Executa as substituições especificadas na lista `list`. Uma operação de substituição `replacements` consiste em uma lista de dois valores, o valor antigo e o valor novo, fornecida em uma lista. Um valor de critérios de equação opcional, `equationCriteria`, pode ser especificado para controlar o teste de igualdade.


## Examples

### Example #1
Crie uma lista em \{1, 2, 3, 4, 5\} substituindo o valor 5 por -5, e o valor 1 por -1.
```powerquery
List.ReplaceMatchingItems({1, 2, 3, 4, 5}, {{5, -5}, {1, -1}})
```

Result: 
```powerquery
{-1, 2, 3, 4, -5}
```




## Category
List.Transformation functions
