---
title: List.RemoveLastN
---

# List.RemoveLastN


Zwraca listę, z której usunięto określoną liczbę elementów znajdujących się na końcu listy.


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Zwraca listę, z której usunięto ostatnich `countOrCondition` elementów znajdujących się na końcu listy `list`. Jeśli `list` liczba elementów jest mniejsza niż `countOrCondition` elementów, zwracana jest pusta lista.

-   Jeśli określono liczbę, zostanie usuniętych maksymalnie tyle elementów.
-   Jeśli określono warunek, wszystkie kolejne pasujące elementy na końcu `list` zostaną usunięte.
-   Jeśli ten parametr ma wartość null, usuwany jest tylko jeden element.


## Examples

### Example #1
Utwórz listę na podstawie listy \{1, 2, 3, 4, 5\} bez 3 ostatnich liczb.
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2
Utwórz na podstawie listy \{5, 4, 2, 6, 4\} listę, która kończy się liczbą mniejszą niż 3.
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
