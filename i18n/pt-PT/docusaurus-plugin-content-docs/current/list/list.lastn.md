---
title: List.LastN
---

# List.LastN


Devolve uma lista do último item ou itens na lista especificada. Opcionalmente, é possível especificar quantos valores devem ser devolvidos ou uma condição de qualificação.


## Syntax

```powerquery
List.LastN(
    list as list,
    optional countOrCondition as any
) as any
```


## Remarks

Devolve uma lista com o último item ou os últimos itens da lista especificada.

-   `list`: a lista a examinar. Se a lista estiver vazia, é devolvida uma lista vazia.
-   `countOrCondition`: (opcional) suporta a recolha de vários itens ou a filtragem de itens. Embora este parâmetro esteja indicado como opcional, ocorre um erro se este valor não for fornecido ou for `null`. Este parâmetro pode ser especificado de duas formas:
    -   se for especificado um número, são devolvidos até esse número de itens.
    -   se for especificada uma condição, são devolvidos todos os itens que cumprem a condição, a partir do fim da lista. Assim que um item falhar a condição, não são considerados mais itens.


## Examples

### Example #1
Determinar o último valor na lista \{3, 4, 5, -1, 7, 8, 2\}.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, 1)
```

Result: 
```powerquery
{2}
```


### Example #2
Determinar os últimos valores existentes na lista \{3, 4, 5, -1, 7, 8, 2\} que são maiores que 0.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{7, 8, 2}
```




## Category
List.Selection
