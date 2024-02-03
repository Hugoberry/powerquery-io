---
title: List.MinN
---

# List.MinN


## Description

Zwraca wartości minimalne na liście. Można określić liczbę wartości do zwrócenia lub warunek filtrowania.


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

Zwraca wartości minimalne na liście <code>list</code>.     Parametr <code>countOrCondition</code>określa liczbę wartości do zwrócenia lub warunek filtrowania. Opcjonalny parametr, <code>comparisonCriteria</code>, określa sposób porównywania wartości na liście. <ul> <li> <code>list</code>: lista wartości.</li> <li> <code>countOrCondition</code>: Jeśli określono liczbę, zwracana jest lista maksymalnie <code>countOrCondition</code> elementów w kolejności rosnącej. Jeśli określono warunek, zwracana jest lista elementów, które początkowo spełniają warunek. Gdy element ulegnie awarii, nie zostaną uwzględnione żadne dalsze elementy. Jeśli ten parametr ma wartość null, zwracana jest najmniejsza pojedyncza wartość na liście.</li><li><code>comparisonCriteria</code>: <i>[Opcjonalnie]</i> Można określić opcjonalną wartość <code>comparisonCriteria</code>, aby określić sposób porównywania elementów na liście. Jeśli ten parametr ma wartość null, używany jest domyślny moduł porównujący. </li></ul>


## Examples

### Example #1 
Znajdź 5 najmniejszych wartości na liście &lt;code&gt;\{3, 4, 5, -1, 7, 8, 2}&lt;/code&gt;.
```powerquery
List.MinN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{-1, 2, 3, 4, 5}
```




## Category
List.Ordering
