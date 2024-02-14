---
title: List.Mode
---

# List.Mode


Zwraca wartość, która najczęściej występuje na liście.


## Syntax

```powerquery
List.Mode(
    list as list,
    optional equationCriteria as any
) as any
```


## Remarks

Zwraca element najczęściej występujący na liście <code>list</code>. Jeśli lista jest pusta, jest zwracany wyjątek. Jeśli wiele elementów ma taką samą częstotliwość występowania, jest wybierany ostatni z nich.    W celu sterowania testowaniem jakości można określić opcjonalną wartość <code>comparisonCriteria</code>: <code>equationCriteria</code>. 


## Examples

### Example #1 
Znajdź element najczęściej występujący na liście &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5}&lt;/code&gt;.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5})
```

Result: 
```powerquery
3
```


### Example #2 
Znajdź element najczęściej występujący na liście &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5, 5}&lt;/code&gt;.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
5
```




## Category
List.Averages
