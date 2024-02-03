---
title: List.Skip
---

# List.Skip


## Description

Zwraca listę, na której pominięto określoną liczbę elementów znajdujących się na początku innej listy.


## Syntax

```powerquery
List.Skip(
    list as list,
    optional countOrCondition as any
) as list
```


## Details

Zwraca listę, na której pominięto pierwszy element listy <code>list</code>. Jeśli lista <code>list</code> jest pusta, zwracana jest pusta lista.Ta funkcja przyjmuje opcjonalny parametr <code>countOrCondition</code>, który umożliwia pominięcie wielu wartości, tak jak opisano poniżej. <ul> <li>Jeśli jest określona liczba, zostanie pominiętych maksymalnie tyle elementów, ile wynosi ta liczba. </li> <li>Jeśli jest określony warunek, zwracana lista zaczyna się od pierwszego elementu z listy <code>list</code>, który spełnia kryteria. Gdy zostanie znaleziony element, który nie spełnia warunku, nie będą analizowane dalsze elementy. </li> <li>Jeśli ten parametr ma wartość null, jest stosowane zachowanie domyślne. </li> </ul>


## Examples

### Example #1 
Utwórz listę na podstawie listy \{1, 2, 3, 4, 5} bez 3 pierwszych liczb.
```powerquery
List.Skip({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2 
Utwórz na podstawie listy \{5, 4, 2, 6, 1} listę, która rozpoczyna się od liczby mniejszej niż 3.
```powerquery
List.Skip({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Selection
