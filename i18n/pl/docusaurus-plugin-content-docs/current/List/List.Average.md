---
title: List.Average
---

# List.Average


## Description

Zwraca średnią z wartości. Ta funkcja działa z wartościami typu number, date, datetime, datetimezone i duration.


## Syntax

```powerquery
List.Average(
    list as list,
    optional precision as Precision.Type
) as any
```


## Details

Zwraca średnią wartość elementów na liście <code>list</code>. Wynik ma taki sam typ danych jak wartości na liście. Ta funkcja działa tylko z wartościami typu number, date, time, datetime, datetimezone i duration.    Jeśli lista jest pusta, zwracana jest wartość null.


## Examples

### Example #1 
Znajdź średnią z listy liczb &lt;code&gt;\{3, 4, 6}&lt;/code&gt;.
```powerquery
List.Average({3, 4, 6})
```

Result: 
```powerquery
4.333333333333333
```


### Example #2 
Znajdź średnią z wartości dat 1 stycznia 2011, 2 stycznia 2011 i 3 stycznia 2011.
```powerquery
List.Average({#date(2011, 1, 1), #date(2011, 1, 2), #date(2011, 1, 3)})
```

Result: 
```powerquery
#date(2011, 1, 2)
```




## Category
List.Averages
