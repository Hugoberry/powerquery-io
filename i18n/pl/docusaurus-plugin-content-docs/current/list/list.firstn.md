---
title: List.FirstN
---

# List.FirstN


Zwraca pierwszy zestaw elementów z listy, określając, ile elementów ma zostać zwróconych, lub warunek kwalifikacji.


## Syntax

```powerquery
List.FirstN(
    list as list,
    countOrCondition as any
) as any
```


## Remarks

-   Jeśli jest określona liczba, zostanie zwróconych maksymalnie tyle elementów, ile wynosi ta liczba.
-   Jeśli jest określony warunek, zostaną zwrócone wszystkie elementy, które początkowo spełniały warunek. Gdy zostanie znaleziony element, który nie spełnia warunku, nie będą analizowane dalsze elementy.


## Examples

### Example #1
Znajdź na liście \{3, 4, 5, -1, 7, 8, 2\} początkowe wartości, które są większe niż 0.
```powerquery
List.FirstN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Selection
