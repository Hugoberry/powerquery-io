---
title: List.Modes
---

# List.Modes


## Description

Zwraca listę wartości najczęściej występujących na danej liście.


## Syntax

```powerquery
List.Modes(
    list as list,
    optional equationCriteria as any
) as list
```


## Details

Zwraca element najczęściej występujący na liście <code>list</code>. Jeśli lista jest pusta, jest zwracany wyjątek. Jeśli wiele elementów ma taką samą częstotliwość występowania, jest wybierany ostatni z nich.    W celu sterowania testowaniem jakości można określić opcjonalną wartość <code>comparisonCriteria</code>: <code>equationCriteria</code>. 


## Examples

### Example #1 
Znajdź elementy najczęściej występujące na liście &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5, 5}&lt;/code&gt;.
```powerquery
List.Modes({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
{3, 5}
```




## Category
List.Averages
