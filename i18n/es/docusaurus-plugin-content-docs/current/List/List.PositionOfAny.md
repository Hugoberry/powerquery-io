---
title: List.PositionOfAny
---

# List.PositionOfAny


## Description

Devuelve el primer desplazamiento de un valor en una lista.


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

Devuelve el desplazamiento de la lista <code>list</code> de la primera repetición de un valor de una lista <code>values</code>. Devuelve -1 si no se encuentra ninguna repetición.    Puede especificarse un parámetro de repetición opcional, <code>occurrence</code>.<ul>   <li><code>occurrence</code>: el número máximo de repeticiones que se puede devolver.</li></ul>


## Examples

### Example #1 
Buscar la primera posición en la lista \{1, 2, 3} en la que el valor 2 o 3 aparece.
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```




## Category
List.Membership functions
