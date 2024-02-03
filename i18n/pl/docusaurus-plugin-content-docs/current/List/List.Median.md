---
title: List.Median
---

# List.Median


## Description

Zwraca wartość mediany z listy.


## Syntax

```powerquery
List.Median(
    list as list,
    optional comparisonCriteria as any
) as any
```


## Details

Zwraca element mediany listy <code>list</code>. Ta funkcja zwraca wartość <code>null</code>, jeśli lista nie zawiera żadnych wartości innych niż <code>null</code>.    W przypadku parzystej liczby elementów, funkcja wybiera mniejszy z dwóch elementów mediany, chyba, że lista    składa się w całości z elementów będących datami i godzinami, czasami trwania, numerami lub godzinami — w takim przypadku zostanie zwrócona średnia wartość dwóch elementów.


## Examples

### Example #1 
Znajdź medianę na liście &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt;.
```powerquery
List.Median({5, 3, 1, 7, 9})
```

Result: 
```powerquery
5
```




## Category
List.Ordering
