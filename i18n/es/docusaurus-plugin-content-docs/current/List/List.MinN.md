---
title: List.MinN
---

# List.MinN


## Description

Devuelve los valores mínimos de la lista. Puede especificarse la condición de filtrado o el número de valores que se van a devolver.


## Syntax

```powerquery
List.MinN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Details

Devuelve los valores mínimos de la lista, <code>list</code>.    El parámetro <code>countOrCondition</code> especifica el número de valores que se devolverán o una condición de filtrado. El parámetro opcional <code>comparisonCriteria</code> especifica cómo se comparan los valores de la lista. <ul>        <li><code>list</code>: La lista de valores.</li>        <li><code>countOrCondition</code>: si se especifica un número, se devuelve una lista de hasta <code>countOrCondition</code> elementos en orden ascendente. Si se especifica una condición, se devuelve una lista de los elementos que cumplen inicialmente la condición. Si un elemento no cumple la condición, no se considerarán más elementos. Si este parámetro es "null", se devuelve el valor menor único de la lista.</li><li><code>comparisonCriteria</code>: <i>[Opcional]</i> Se puede especificar un valor <code>comparisonCriteria</code> opcional para determinar cómo se comparan los elementos de la lista. Si este parámetro es "null", se usa el comparador predeterminado. </li></ul>


## Examples

### Example #1 
Buscar los cinco valores menores de la lista &lt;code&gt;\{3, 4, 5, -1, 7, 8, 2}&lt;/code&gt;.
```powerquery
List.MinN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{-1, 2, 3, 4, 5}
```




## Category
List.Ordering
