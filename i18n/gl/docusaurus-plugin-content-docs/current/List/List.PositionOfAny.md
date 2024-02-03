---
title: List.PositionOfAny
---

# List.PositionOfAny


## Description

Devolve o primeiro desprazamento dun valor da lista.


## Syntax

```powerquery
List.PositionOfAny(
    list as list,
    values as list,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Details

Devolve o desprazamento na lista <code>list</code> da primeira ocorrencia dun valor da lista <code>values</code>. Devolve -1 se non se localiza ningunha ocorrencia.    Tamén se pode especificar un parámetro de ocorrencia opcional, <code>occurrence</code>.<ul>   <li><code>occurrence</code>: o número máximo de ocorrencias que se poden devolver.</li></ul>


## Examples

### Example #1 
Buscar a primeira posición na lista \{1, 2, 3} na que aparece o valor 2 ou 3.
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```




## Category
List.Membership functions
