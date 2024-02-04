---
title: List.FirstN
---

# List.FirstN


## Description

Devolve o primeiro conjunto de itens existentes na lista, especificando a quantidade de itens a devolver ou uma condição de qualificação.


## Syntax

```powerquery
List.FirstN(
    list as list,
    countOrCondition as any
) as any
```


## Details

 <ul>  <li>Se for especificado um número, são devolvidos tantos itens quanto esse número. </li>  <li>Se for especificada uma condição, são devolvidos todos os itens que satisfizerem a condição inicialmente. Quando um item não satisfizer a condição, não serão considerados mais itens. </li> </ul>


## Examples

### Example #1 
Determinar os valores iniciais existentes na lista \{3, 4, 5, -1, 7, 8, 2} que são maiores que 0.
```powerquery
List.FirstN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Selection
