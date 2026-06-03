---
title: List.ContainsAny
---

# List.ContainsAny


Wskazuje, czy lista zawiera dowolną z wartości z innej listy.


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Wskazuje, czy lista zawiera jakiekolwiek wartości z innej listy. Zwraca wartość `PRAWDA`, jeśli wartości znajdują się na liście, w przeciwnym razie zwraca wartość `FAŁSZ`.

-   `list`: lista do wyszukania.
-   `values`: lista wartości do wyszukania na pierwszej liście.
-   `equationCriteria`: (Opcjonalnie) Moduł porównujący używany do określenia, czy dwie wartości są równe.


## Examples

### Example #1
Ustal, czy lista \{1, 2, 3, 4, 5\} zawiera 3, czy 9.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2
Ustal, czy lista \{1, 2, 3, 4, 5\} zawiera 6, czy 7.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```


### Example #3
Określ, czy lista zawiera konia lub sowę, ignorując wielkość liter.
```powerquery
List.ContainsAny({"dog", "cat", "racoon", "horse", "rabbit"}, {"Horse", "OWL"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Sprawdź, czy lista zawiera datę 8 kwietnia 2022 r. lub 12 stycznia 2021 r.
```powerquery
let
    Source = {#date(2024, 2, 23), #date(2023, 12, 2), #date(2022, 4, 8), #date(2021, 7, 6)},
    ContainsDates = List.ContainsAny(Source, {Date.From("Apr 8, 2022"), Date.From("Jan 11, 2021")})
in
    ContainsDates
```

Result: 
```powerquery
true
```




## Category
List.Membership functions
