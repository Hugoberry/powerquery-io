---
title: List.MaxN
---

# List.MaxN


## Description

Devolve os valores máximos da lista. Debe especificarse o número de valores a devolver ou unha condición de filtrado.


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

Devolve os valores máximos da lista, <code>list</code>.    Despois de ordenar as filas, pódense especificar parámetros opcionais para filtrar aínda máis o resultado. O parámetro opcional <code>countOrCondition</code> especifica unha condición de filtrado ou o número de valores que se van devolver. O parámetro opcional <code>comparisonCriteria</code> especifica como comparar valores na lista. <ul>        <li> <code>list</code>: a lista de valores.</li>        <li> <code>countOrCondition</code>: se se especifica un número, devólvese unha lista de ata <code>countOrCondition</code> elementos en orde ascendente. Se se especifica unha condición, devólvese unha lista de elementos que inicialmente cumpren a condición. Cando un elemento non cumpre a condición, non se teñen en conta máis elementos.</li><li><code>comparisonCriteria</code>: <i>[Opcional]</i> Pódese especificar un valor opcional <code>comparisonCriteria</code> para determinar como comparar os elementos da lista. Se este parámetro é nulo, utilízase o comparador predefinido.</li></ul>



## Category
List.Ordering
