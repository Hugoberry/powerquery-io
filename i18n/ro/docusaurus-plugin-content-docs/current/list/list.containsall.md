---
title: List.ContainsAll
---

# List.ContainsAll


Indică dacă o listă include toate valorile în altă listă.


## Syntax

```powerquery
List.ContainsAll(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Indică dacă lista conține toate valorile dintr-o altă listă. Returnează `true` dacă toate valorile sunt găsite în listă, în caz contrar `false`.

-   `list` Lista de căutat.
-   `values`: Lista de valori de căutat în prima listă.
-   `equationCriteria`: (Opțional) Comparatorul utilizat pentru a stabili dacă două valori sunt egale.


## Examples

### Example #1
Stabiliți dacă lista \{1, 2, 3, 4, 5\} conține 3 și 4.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {3, 4})
```

Result: 
```powerquery
true
```


### Example #2
Stabiliți dacă lista \{1, 2, 3, 4, 5\} conține 5 și 6.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {5, 6})
```

Result: 
```powerquery
false
```


### Example #3
Determinați dacă lista conține un câine și un cal, ignorând literele mari sau mici.
```powerquery
List.ContainsAll({"dog", "cat", "racoon", "horse", "rabbit"}, {"DOG", "Horse"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Determinați dacă lista conține datele 8 aprilie 2022 și 6 iulie 2021.
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
