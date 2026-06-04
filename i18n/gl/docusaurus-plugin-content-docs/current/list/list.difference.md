---
title: List.Difference
---

# List.Difference


Devolve a diferenza entre dúas listas indicadas.


## Syntax

```powerquery
List.Difference(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Remarks

Devolve os elementos da lista `list1` que non aparecen na lista `list2`. Admítense os valores duplicados. Pódese indicar un valor de criterio de ecuación opcional, `equationCriteria`, para controlar probas de igualdade.


## Examples

### Example #1
Buscar os elementos da lista \{1, 2, 3, 4, 5\} que non aparecen en \{4, 5, 3\}.
```powerquery
List.Difference({1, 2, 3, 4, 5}, {4, 5, 3})
```

Result: 
```powerquery
{1, 2}
```


### Example #2
Buscar os elementos da lista \{1, 2\} que non aparecen en \{1, 2, 3\}.
```powerquery
List.Difference({1, 2}, {1, 2, 3})
```

Result: 
```powerquery
{}
```




## Category
List.Set operations
