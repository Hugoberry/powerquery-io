---
title: List.ContainsAll
---

# List.ContainsAll


Wskazuje, czy lista zawiera wszystkie wartości z innej listy.


## Syntax

```powerquery
List.ContainsAll(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Wskazuje, czy lista zawiera wszystkie wartości z innej listy. Zwraca wartość `PRAWDA`, jeśli wszystkie wartości znajdują się na liście, w przeciwnym razie zwraca wartość `FAŁSZ`.

-   `list`: lista do wyszukania.
-   `values`: lista wartości do wyszukania na pierwszej liście.
-   `equationCriteria`: (Opcjonalnie) Moduł porównujący używany do określenia, czy dwie wartości są równe.


## Examples

### Example #1
Ustal, czy lista \{1, 2, 3, 4, 5\} zawiera wartości 3 i 4.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {3, 4})
```

Result: 
```powerquery
true
```


### Example #2
Ustal, czy lista \{1, 2, 3, 4, 5\} zawiera wartości 5 i 6.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {5, 6})
```

Result: 
```powerquery
false
```


### Example #3
Sprawdź, czy lista zawiera psa i konia, ignorując wielkość liter.
```powerquery
List.ContainsAll({"dog", "cat", "racoon", "horse", "rabbit"}, {"DOG", "Horse"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Sprawdź, czy lista zawiera daty 8 kwietnia 2022 r. i 6 lipca 2021 r.
```powerquery
let
    Source = {#date(2024, 2, 23), #date(2023, 12, 2), #date(2022, 4, 8), #date(2021, 7, 6)},
    ContainsDates = List.ContainsAll(Source, {#date(2022, 4, 8), #date(2021, 7, 6)})
in
    ContainsDates
```

Result: 
```powerquery
true
```




## Category
List.Membership functions
