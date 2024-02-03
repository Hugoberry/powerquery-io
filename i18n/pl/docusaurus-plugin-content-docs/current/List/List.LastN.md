---
title: List.LastN
---

# List.LastN


## Description

Zwraca ostatnią wartość z listy.  Opcjonalnie można określić liczbę zwracanych wartości lub warunek kwalifikacji.


## Syntax

```powerquery
List.LastN(
    list as list,
    optional countOrCondition as any
) as any
```


## Details

Zwraca ostatni element z listy <code>list</code>. Jeśli lista jest pusta, zwracany jest wyjątek. Ta funkcja przyjmuje opcjonalny parametr <code>countOrCondition</code>, który umożliwia zebranie wielu elementów lub filtrowanie elementów. Wartość parametru <code>countOrCondition</code> można określić na trzy sposoby: <ul>  <li>Jeśli jest określona liczba, zostanie zwróconych maksymalnie tyle elementów, ile wynosi ta liczba. </li>  <li>Jeśli jest określony warunek, zostaną zwrócone wszystkie elementy (począwszy od końca listy), które początkowo spełniały warunek. Gdy zostanie znaleziony element, który nie spełnia warunku, nie będą analizowane dalsze elementy. </li>  <li>Jeśli ten parametr będzie miał wartość null, zostanie zwrócony ostatni element z listy.</li> </ul>


## Examples

### Example #1 
Znajdź ostatnią wartość na liście \{3, 4, 5, -1, 7, 8, 2}.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, 1)
```

Result: 
```powerquery
{2}
```


### Example #2 
Znajdź ostatnie wartości na liście \{3, 4, 5, -1, 7, 8, 2}, które są większe od 0.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{7, 8, 2}
```




## Category
List.Selection
