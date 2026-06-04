---
title: List.ContainsAny
---

# List.ContainsAny


Označuje, kje seznam vključuje katero koli vrednost na drugem seznamu.


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Označuje, ali seznam vsebuje katero koli vrednost z drugega seznama. Prikaže `true`, če so vrednosti najdene na seznamu, sicer `false`.

-   `list`: seznam za iskanje.
-   `values`: seznam vrednosti, ki jih želite poiskati na prvem seznamu.
-   `equationCriteria`: (opcijsko) primerjalnik, ki se uporablja za določanje, ali sta dve vrednosti enaki.


## Examples

### Example #1
Določi, ali seznam \{1, 2, 3, 4, 5\} vsebuje 3 ali 9.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2
Določi, ali seznam \{1, 2, 3, 4, 5\} vsebuje 6 ali 7.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```


### Example #3
Ugotovi, ali seznam vsebuje konja ali sovo, ne da bi upošteval velikost črk.
```powerquery
List.ContainsAny({"dog", "cat", "racoon", "horse", "rabbit"}, {"Horse", "OWL"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Ugotovi, ali seznam vsebuje datum 8. aprila 2022 ali 12. januarja 2021.
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
