---
title: List.Max
---

# List.Max


## Description

Devuelve el valor máximo o el valor predeterminado de una lista vacía.


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

Devuelve el elemento máximo de la lista <code>list</code> o, si la lista está vacía, el valor predeterminado opcional <code>default</code>.    Se puede especificar un valor de criterio de comparación opcional <code>comparisonCriteria</code> para determinar cómo se comparan los elementos de la lista. Si este parámetro es "null", se usa el comparador predeterminado.


## Examples

### Example #1 
Buscar el valor máximo de la lista \{1, 4, 7, 3, -2, 5}.
```powerquery
List.Max({1, 4, 7, 3, -2, 5}, 1)
```

Result: 
```powerquery
7
```


### Example #2 
Buscar el valor máximo de la lista \{} o devolver -1 si está vacía. 
```powerquery
List.Max({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Ordering
