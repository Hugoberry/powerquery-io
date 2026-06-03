---
title: List.Skip
---

# List.Skip


Devolve uma lista que ignora o número especificado de elementos existente no início da lista.


## Syntax

```powerquery
List.Skip(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Devolve uma lista que ignora o primeiro elemento da lista `list`. Se `list` for uma lista vazia, é devolvida uma lista vazia. Esta função aceita um parâmetro opcional, `countOrCondition`, para suportar a ignorar vários valores, conforme listado abaixo.

-   Se for especificado um número, até esse número de itens são ignorados.
-   Se for especificada uma condição, todos os itens correspondentes consecutivos no início de `list` são ignorados.
-   Se este parâmetro for nulo, o comportamento predefinição é observado.


## Examples

### Example #1
Criar uma lista a partir de \{1, 2, 3, 4, 5\} sem os primeiros 3 números.
```powerquery
List.Skip({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2
Criar uma lista a partir de \{5, 4, 2, 6, 1\} que começa com um número menor que 3.
```powerquery
List.Skip({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Selection
