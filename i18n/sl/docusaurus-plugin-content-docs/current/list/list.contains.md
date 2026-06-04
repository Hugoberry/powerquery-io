---
title: List.Contains
---

# List.Contains


Označuje, ali seznam vsebuje vrednost.


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Remarks

Označuje, ali seznam vsebuje navedeno vrednost. Prikaže `true`, če je vrednost najdena na seznamu, sicer `false`.

-   `list`: seznam za iskanje.
-   `value`: vrednost, ki jo želite poiskati na seznamu.
-   `equationCriteria`: (opcijsko) primerjalnik, ki se uporablja za določanje, ali sta dve vrednosti enaki.


## Examples

### Example #1
Določi, ali seznam \{1, 2, 3, 4, 5\} vsebuje 3.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2
Določi, ali seznam \{1, 2, 3, 4, 5\} vsebuje 6.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```


### Example #3
Če primera ne upoštevate, ugotovite, ali seznam vsebuje"rhubarb".
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
Ugotovi, ali seznam vsebuje datum 8. april 2022.
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
