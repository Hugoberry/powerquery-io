---
title: List.LastN
---

# List.LastN


Retorna uma lista do último item ou itens na lista especificada. Opcionalmente, pode especificar quantos valores serão retornados ou uma condição de qualificação.


## Syntax

```powerquery
List.LastN(
    list as list,
    optional countOrCondition as any
) as any
```


## Remarks

Retorna uma lista do último item ou itens na lista especificada.

-   `list`: a lista a ser examinada. Se a lista estiver vazia, uma lista vazia será retornada.
-   `countOrCondition`: (Opcional) Dá suporte à coleta de vários itens ou à filtragem de itens. Embora esse parâmetro esteja listado como opcional, ocorrerá um erro se esse valor não for fornecido ou for `null`. Esse parâmetro pode ser especificado de duas maneiras:
    -   Se um número for especificado, até esse número de itens serão retornados.
    -   Se uma condição for especificada, todos os itens que atendam à condição serão retornados, começando no final da lista. Depois que um item falha na condição, nenhum outro item é considerado.


## Examples

### Example #1
Localize o último valor da lista \{3, 4, 5, -1, 7, 8, 2\}.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, 1)
```

Result: 
```powerquery
{2}
```


### Example #2
Localize os últimos valores da lista \{3, 4, 5, -1, 7, 8, 2\} que sejam maiores que 0.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{7, 8, 2}
```




## Category
List.Selection
