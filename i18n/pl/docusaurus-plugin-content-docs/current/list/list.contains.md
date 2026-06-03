---
title: List.Contains
---

# List.Contains


Wskazuje, czy lista zawiera wartość.


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Remarks

Wskazuje, czy lista zawiera określoną wartość. Zwraca wartość `PRAWDA`, jeśli wartość znajduje się na liście, w przeciwnym razie zwraca wartość `FAŁSZ`.

-   `list`: lista do wyszukania.
-   `value`: wartość do wyszukania na liście.
-   `equationCriteria`: (Opcjonalnie) Moduł porównujący używany do określenia, czy dwie wartości są równe.


## Examples

### Example #1
Ustal, czy lista \{1, 2, 3, 4, 5\} zawiera 3.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2
Ustal, czy lista \{1, 2, 3, 4, 5\} zawiera 6.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```


### Example #3
Nie uwzględniając wielkości liter, sprawdź, czy lista zawiera słowo „rhubarb”.
```powerquery
List.Contains({"Pears", "Bananas", "Rhubarb", "Peaches"},
    "rhubarb",
    Comparer.OrdinalIgnoreCase
)
```

Result: 
```powerquery
true
```


### Example #4
Ustal, czy lista zawiera datę 8 kwietnia 2022 r.
```powerquery
let
    Source = {#date(2024, 2, 23), #date(2023, 12, 2), #date(2022, 4, 8), #date(2021, 7, 6)},
    ContainsDate = List.Contains(Source, Date.From("4/8/2022"))
in
    ContainsDate
```

Result: 
```powerquery
true
```




## Category
List.Membership functions
