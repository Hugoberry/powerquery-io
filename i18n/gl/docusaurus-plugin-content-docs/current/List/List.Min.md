---
title: List.Min
---

# List.Min


## Description

Devolve o valor mínimo da lista ou o valor predefinido nunha lista baleira.


## Syntax

```powerquery
List.Min(
    list as list,
    optional default as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as any
```


## Details

Devolve o elemento mínimo da lista <code>list</code> ou o valor predefinido opcional <code>default</code> se a lista está baleira.    Pódese especificar un valor comparisonCriteria opcional, <code>comparisonCriteria</code>, para determinar como comparar os elementos da lista. Se este parámetro é nulo, úsase o comparador predefinido.


## Examples

### Example #1 
Buscar o mínimo da lista \{1, 4, 7, 3, -2, 5}.
```powerquery
List.Min({1, 4, 7, 3, -2, 5})
```

Result: 
```powerquery
-2
```


### Example #2 
Buscar o mínimo da lista \{} ou devolver -1 se está baleira. 
```powerquery
List.Min({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Ordering
