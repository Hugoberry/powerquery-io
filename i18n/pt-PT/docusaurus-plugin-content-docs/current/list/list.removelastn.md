---
title: List.RemoveLastN
---

# List.RemoveLastN


Devolve uma lista que remove o número especificado de elementos do final da lista.


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Devolve uma lista que remove os últimos `countOrCondition` elementos do final da lista `list`. Se `list` tiver menos do que elementos `countOrCondition` , é devolvida uma lista vazia.

-   Se for especificado um número, até esse número de itens são removidos.
-   Se for especificada uma condição, todos os itens correspondentes consecutivos no final de `list` são removidos.
-   Se este parâmetro for nulo, apenas um item é removido.


## Examples

### Example #1
Criar uma lista a partir de \{1, 2, 3, 4, 5\} sem os últimos 3 números.
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2
Criar uma lista a partir de \{5, 4, 2, 6, 4\} que termina com um número menor que 3.
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
