---
title: List.RemoveFirstN
---

# List.RemoveFirstN


Retorna uma lista que ignora o número especificado de elementos no início da lista.


## Syntax

```powerquery
List.RemoveFirstN(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Retorna uma lista que remove o primeiro elemento da lista <code>list</code>. Se <code>list</code> for uma lista vazia, uma lista vazia será retornada.Essa função assume um parâmetro opcional, <code>countOrCondition</code>, para que você possa remover vários valores, conforme listado abaixo. <ul> <li>Se um número for especificado, essa será a quantidade de itens removidos. </li> <li>Se uma condição for especificada, a lista retornada começará com o primeiro elemento em <code>list</code> que atende aos critérios. Quando um item não atender à condição, nenhum outro item será considerado. </li> <li>Se esse parâmetro for nulo, o comportamento padrão será observado. </li> </ul>


## Examples

### Example #1 
Crie uma lista a partir de \{1, 2, 3, 4, 5} sem os três primeiros números.
```powerquery
List.RemoveFirstN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2 
Crie uma lista a partir de \{5, 4, 2, 6, 1} que comece com um número menor que 3.
```powerquery
List.RemoveFirstN({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Transformation functions
