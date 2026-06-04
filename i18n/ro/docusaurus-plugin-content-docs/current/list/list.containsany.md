---
title: List.ContainsAny
---

# List.ContainsAny


Indică dacă o listă include oricare dintre valori în altă listă.


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Indică dacă lista conține oricare dintre valorile dintr-o altă listă. Returnează `true` dacă valorile sunt găsite în listă, în caz contrar `false`.

-   `list` Lista de căutat.
-   `values`: Lista de valori de căutat în prima listă.
-   `equationCriteria`: (Opțional) Comparatorul utilizat pentru a stabili dacă două valori sunt egale.


## Examples

### Example #1
Stabiliți dacă lista \{1, 2, 3, 4, 5\} conține 3 sau 9.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2
Stabiliți dacă lista \{1, 2, 3, 4, 5\} conține 6 sau 7.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```


### Example #3
Determinați dacă lista conține un cal și o bufniță, ignorând literele mari sau mici.
```powerquery
List.ContainsAny({"dog", "cat", "racoon", "horse", "rabbit"}, {"Horse", "OWL"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Determinați dacă lista conține fie data de 8 aprilie 2022, fie data de 12 ianuarie 2021.
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
