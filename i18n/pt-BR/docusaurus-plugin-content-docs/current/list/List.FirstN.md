---
title: List.FirstN
---

# List.FirstN


Retorna o primeiro conjunto de itens da lista especificando quantos itens serão retornados ou uma condição de qualificação.


## Syntax

```powerquery
List.FirstN(
    list as list,
    countOrCondition as any
) as any
```


## Remarks

 <ul>  <li>Se um número for especificado, essa será a quantidade de itens retornados. </li>  <li>Se uma condição for especificada, todos os itens que atenderem inicialmente à condição serão retornados. Quando um item não atender à condição, nenhum outro item será considerado. </li> </ul>


## Examples

### Example #1 
Localize os valores iniciais na lista \{3, 4, 5, -1, 7, 8, 2} que sejam maiores que 0.
```powerquery
List.FirstN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Selection
