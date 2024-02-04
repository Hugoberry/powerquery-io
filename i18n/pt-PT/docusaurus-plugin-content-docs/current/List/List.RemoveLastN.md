---
title: List.RemoveLastN
---

# List.RemoveLastN


## Description

Devolve uma lista que remove o número especificado de elementos do final da lista.


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Details

Devolve uma lista que remove os últimos <code>countOrCondition</code> elementos do final da lista <code>list</code>. Se <code>list</code> tiver menos de <code>countOrCondition</code> elementos, é devolvida uma lista vazia. <ul> <li>Se for especificado um número, é removido até esse número de itens. </li> <li>Se for especificada uma condição, a lista devolvida termina com o primeiro elemento do fim de <code>list</code> que satisfaça os critérios. Quando um item não satisfizer a condição, não serão considerados mais itens. </li> <li>Se este parâmetro for nulo, só será removido um item. </li> </ul>


## Examples

### Example #1 
Criar uma lista a partir de \{1, 2, 3, 4, 5} sem os últimos 3 números.
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
Criar uma lista a partir de \{5, 4, 2, 6, 4} que termina com um número menor que 3.
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
