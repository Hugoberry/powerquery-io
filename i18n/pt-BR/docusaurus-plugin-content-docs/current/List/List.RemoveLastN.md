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

Retorna uma lista que remove os <code>countOrCondition</code> últimos elementos do final da lista <code>list</code>. Se <code>list</code> tiver menos que <code>countOrCondition</code> elementos, uma lista vazia será retornada. <ul> <li>Se um número for especificado, essa será a quantidade de itens removidos. </li> <li>Se uma condição for especificada, a lista retornado terminará com o primeiro elemento no final em <code>list</code> que atende aos critérios. Quando um item não atender à condição, nenhum outro item será considerado. </li> <li>Se esse parâmetro for nulo, somente um item será removido. </li> </ul>


## Examples

### Example #1 
Crie uma lista a partir de \{1, 2, 3, 4, 5} sem os três últimos números.
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
Crie uma lista a partir de \{5, 4, 2, 6, 4} que termine com um número menor que 3.
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
