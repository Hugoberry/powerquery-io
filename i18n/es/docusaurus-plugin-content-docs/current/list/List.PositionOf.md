---
title: List.PositionOf
---

# List.PositionOf


Devuelve los desplazamientos de un valor en una lista.


## Syntax

```powerquery
List.PositionOf(
    list as list,
    value as any,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Remarks

Devuelve el desplazamiento en el que el valor <code>value</code> aparece en la lista <code>list</code>. Devuelve -1 si el valor no aparece.    Puede especificarse un parámetro de repetición opcional, <code>occurrence</code>.<ul>   <li><code>occurrence</code>: el número máximo de repetición que notificar.</li></ul>


## Examples

### Example #1 
Buscar la posición en la lista \{1, 2, 3} en la que el valor 3 aparece.
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```




## Category
List.Membership functions
