---
title: List.Contains
---

# List.Contains


Indică dacă lista conţine valoarea.


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Remarks

Indică dacă lista conține valoarea specificată. Returnează `true` dacă valoarea este găsită în listă, în caz contrar `false`.

-   `list` Lista de căutat.
-   `value`: Valoarea de căutat în listă.
-   `equationCriteria`: (Opțional) Comparatorul utilizat pentru a stabili dacă două valori sunt egale.


## Examples

### Example #1
Stabiliți dacă lista \{1, 2, 3, 4, 5\} conține 3.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2
Stabiliți dacă lista \{1, 2, 3, 4, 5\} conține 6.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```


### Example #3
Ignorând literele mari și mici, aflați dacă lista conține „rubarbă”.
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
Determinați dacă lista conține data de 8 aprilie 2022.
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
