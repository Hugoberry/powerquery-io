---
title: List.RemoveFirstN
---

# List.RemoveFirstN


Devolve uma lista que ignora o número especificado de elementos existente no início da lista.


## Syntax

```powerquery
List.RemoveFirstN(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Devolve uma lista que remove o primeiro elemento da lista <code>list</code>. Se <code>list</code> for uma lista vazia, é devolvida uma lista vazia.Esta função utiliza um parâmetro opcional, <code>countOrCondition</code>, para suportar a remoção de vários valores, conforme listado abaixo. <ul> <li>Se for especificado um número, é removido até esse número de itens. </li> <li>Se for especificada uma condição, a lista devolvida começa pelo primeiro elemento de <code>list</code> que satisfaça os critérios. Quando um item não satisfizer a condição, não serão considerados mais itens. </li> <li>Se este parâmetro for nulo, será observado o comportamento predefinido. </li> </ul>


## Examples

### Example #1 
Criar uma lista a partir de \{1, 2, 3, 4, 5} sem os primeiros 3 números.
```powerquery
List.RemoveFirstN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2 
Criar uma lista a partir de \{5, 4, 2, 6, 1} que começa com um número menor que 3.
```powerquery
List.RemoveFirstN({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Transformation functions
