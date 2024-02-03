---
title: List.MaxN
---

# List.MaxN


## Description

Devuelve los valores máximos de la lista. Debe especificarse la condición de filtrado o el número de valores que se van a devolver.


## Syntax

```powerquery
List.MaxN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Details

Devuelve los valores máximos de la lista, <code>list</code>.    Una vez ordenadas las filas, se pueden especificar parámetros opcionales para filtrar aún más el resultado. El parámetro opcional <code>countOrCondition</code> especifica el número de valores que se devolverán o una condición de filtrado. El parámetro opcional <code>comparisonCriteria</code> especifica cómo se comparan los valores de la lista. <ul>        <li><code>list</code>: La lista de valores.</li>        <li><code>countOrCondition</code>: si se especifica un número, se devuelve una lista de hasta <code>countOrCondition</code> elementos en orden ascendente. Si se especifica una condición, se devuelve una lista de los elementos que cumplen inicialmente la condición. Si un elemento no cumple la condición, no se considerarán más elementos.</li><li><code>comparisonCriteria</code>: <i>[Opcional]</i> Se puede especificar un valor <code>comparisonCriteria</code> opcional para determinar cómo se comparan los elementos de la lista. Si este parámetro es "null", se usa el comparador predeterminado. </li></ul>



## Category
List.Ordering
