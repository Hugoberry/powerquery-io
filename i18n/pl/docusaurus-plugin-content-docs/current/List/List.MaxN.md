---
title: List.MaxN
---

# List.MaxN


## Description

Zwraca maksymalne wartości na liście. Należy określić liczbę wartości do zwrócenia lub warunek filtrowania.


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

Zwraca maksymalne wartości na liście <code>list</code>.     Po posortowania wierszy można określić parametry opcjonalne w celu dalszego filtrowania wyniku. Opcjonalny parametr <code>countOrCondition</code> określa liczbę wartości do zwrócenia lub warunek filtrowania. Opcjonalny parametr <code>comparisonCriteria</code> określa sposób porównywania wartości na liście. <ul> <li> <code>list</code>: lista wartości.</li> <li> <code>countOrCondition</code>: Jeśli określono liczbę, zwracana jest lista maksymalnie <code>countOrCondition</code> elementów w kolejności rosnącej. Jeśli określono warunek, zwracana jest lista elementów, które początkowo spełniają warunek. Gdy warunek nie powiedzie się, nie zostaną uwzględnione żadne dalsze elementy.</li><li><code>comparisonCriteria</code>: <i>[Opcjonalnie]</i> Można określić opcjonalną wartość <code>comparisonCriteria</code>, aby określić sposób porównywania elementów na liście. Jeśli ten parametr ma wartość null, używany jest domyślny moduł porównujący. </li></ul>



## Category
List.Ordering
