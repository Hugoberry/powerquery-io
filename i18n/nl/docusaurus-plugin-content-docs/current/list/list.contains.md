---
title: List.Contains
---

# List.Contains


Geeft aan of de lijst de waarde bevat.


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Remarks

Geeft aan of de lijst de opgegeven waarde bevat. Retourneert `waar` als de waarde in de lijst wordt gevonden, anders `onwaar`.

-   `list`: De lijst die doorzocht moet worden.
-   `value`: De waarde waarnaar in de lijst moet worden gezocht.
-   `equationCriteria`: (Optioneel) De vergelijker die wordt gebruikt om te bepalen of twee waarden gelijk zijn.


## Examples

### Example #1
Bepaal of de lijst \{1, 2, 3, 4, 5\} 3 bevat.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2
Bepaal of de lijst \{1, 2, 3, 4, 5\} 6 bevat.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```


### Example #3
Negeer hoofdlettergebruik, bepaal of de lijst 'rabarber' bevat.
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
Bepaal of de lijst de datum 8 april 2022 bevat.
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
