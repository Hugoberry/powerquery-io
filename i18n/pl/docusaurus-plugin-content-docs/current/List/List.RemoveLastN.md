---
title: List.RemoveLastN
---

# List.RemoveLastN


## Description

Zwraca listę, z której usunięto określoną liczbę elementów znajdujących się na końcu listy.


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Details

Zwraca listę, z której usunięto ostatnich <code>countOrCondition</code> elementów znajdujących się na końcu listy <code>list</code>. Jeśli lista <code>list</code> zawiera mniej elementów niż <code>countOrCondition</code>, zwracana jest pusta lista. <ul> <li>Jeśli jest określona liczba, zostanie usuniętych maksymalnie tyle elementów, ile wynosi ta liczba. </li> <li>Jeśli jest określony warunek, zwracana lista kończy się pierwszym elementem od końca listy <code>list</code>, który spełnia kryteria. Gdy zostanie znaleziony element, który nie spełnia warunku, nie będą analizowane dalsze elementy. </li> <li>Jeśli ten parametr ma wartość null, usuwany jest tylko jeden element. </li> </ul>


## Examples

### Example #1 
Utwórz listę na podstawie listy \{1, 2, 3, 4, 5} bez 3 ostatnich liczb.
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
Utwórz na podstawie listy \{5, 4, 2, 6, 4} listę, która kończy się liczbą mniejszą niż 3.
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
