---
title: List.Max
---

# List.Max


## Description

Devolve o valor máximo da lista ou o valor predefinido nunha lista baleira.


## Syntax

```powerquery
List.Max(
    list as list,
    optional default as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as any
```


## Details

Devolve o elemento máximo da lista <code>list</code> ou o valor predefinido opcional <code>default</code> se a lista está baleira.    Pódese especificar un valor comparisonCriteria opcional, <code>comparisonCriteria</code>, para determinar como comparar os elementos da lista. Se este parámetro é nulo, úsase o comparador predefinido.


## Examples

### Example #1 
Buscar o máximo da lista \{1, 4, 7, 3, -2, 5}.
```powerquery
List.Max({1, 4, 7, 3, -2, 5}, 1)
```

Result: 
```powerquery
7
```


### Example #2 
Buscar o máximo da lista \{} ou devolver -1 se está baleira. 
```powerquery
List.Max({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Ordering
