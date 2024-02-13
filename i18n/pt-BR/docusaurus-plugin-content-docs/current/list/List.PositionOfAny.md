---
title: List.PositionOfAny
---

# List.PositionOfAny


Retorna o primeiro deslocamento de um valor em uma lista.


## Syntax

```powerquery
List.PositionOfAny(
    list as list,
    values as list,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Remarks

Retorna o deslocamento na lista <code>list</code> da primeira ocorrência de um valor em uma lista <code>values</code>. Retorna -1 caso nenhuma ocorrência seja encontrada.    Um parâmetro de ocorrência <code>occurrence</code> opcional pode ser especificado.<ul>   <li><code>occurrence</code>: o número máximo de ocorrências que podem ser retornadas.</li></ul>


## Examples

### Example #1 
Localize a primeira posição na lista \{1, 2, 3} em que o valor 2 ou 3 aparece.
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```




## Category
List.Membership functions
