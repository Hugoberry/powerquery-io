---
title: List.RemoveLastN
---

# List.RemoveLastN


Retorna uma lista que remove o número especificado de elementos do final da lista.


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Retorna uma lista que remove os últimos `countOrCondition` elementos do final da lista `list`. Se `list` tiver menos que `countOrCondition` elementos, uma lista vazia será retornada.

-   Se um número for especificado, até esse número de itens serão removidos.
-   Se uma condição for especificada, todos os itens correspondentes consecutivos no final do `list` serão removidos.
-   Se esse parâmetro for nulo, apenas um item será removido.


## Examples

### Example #1
Crie uma lista a partir de \{1, 2, 3, 4, 5\} sem os três últimos números.
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2
Crie uma lista a partir de \{5, 4, 2, 6, 4\} que termine com um número menor que 3.
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
