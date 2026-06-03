---
title: List.RemoveFirstN
---

# List.RemoveFirstN


Zwraca listę, na której pominięto określoną liczbę elementów znajdujących się na początku innej listy.


## Syntax

```powerquery
List.RemoveFirstN(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Zwraca listę, z której usunięto pierwszy element listy `list`. Jeśli `list` jest listą pustą, zwracana jest pusta lista. Ta funkcja przyjmuje opcjonalny parametr, `countOrCondition`, aby obsługiwać usuwanie wielu wartości, jak pokazano poniżej.

-   Jeśli określono liczbę, zostanie usuniętych maksymalnie tyle elementów.
-   Jeśli określono warunek, wszystkie kolejne pasujące elementy na początku `list` zostaną usunięte.
-   Jeśli ten parametr ma wartość null, zostanie zaobserwowane zachowanie domyślne.


## Examples

### Example #1
Utwórz listę na podstawie listy \{1, 2, 3, 4, 5\} bez 3 pierwszych liczb.
```powerquery
List.RemoveFirstN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2
Utwórz na podstawie listy \{5, 4, 2, 6, 1\} listę, która rozpoczyna się od liczby mniejszej niż 3.
```powerquery
List.RemoveFirstN({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Transformation functions
