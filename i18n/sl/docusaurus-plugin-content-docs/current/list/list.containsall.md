---
title: List.ContainsAll
---

# List.ContainsAll


Označuje, kje seznam vključuje vse vrednosti na drugem seznamu.


## Syntax

```powerquery
List.ContainsAll(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Označuje, ali seznam vključuje vse vrednosti z drugega seznama. Prikaže `true`, če so vse vrednosti najdene na seznamu, sicer `false`.

-   `list`: seznam za iskanje.
-   `values`: seznam vrednosti, ki jih želite poiskati na prvem seznamu.
-   `equationCriteria`: (opcijsko) primerjalnik, ki se uporablja za določanje, ali sta dve vrednosti enaki.


## Examples

### Example #1
Določi, ali seznam \{1, 2, 3, 4, 5\} vsebuje 3 in 4.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {3, 4})
```

Result: 
```powerquery
true
```


### Example #2
Določi, ali seznam \{1, 2, 3, 4, 5\} vsebuje 5 in 6.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {5, 6})
```

Result: 
```powerquery
false
```


### Example #3
Ugotovi, ali seznam vsebuje psa in konja, ne da bi upošteval velikost črk.
```powerquery
List.ContainsAll({"dog", "cat", "racoon", "horse", "rabbit"}, {"DOG", "Horse"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Ugotovi, ali seznam vsebuje datuma 8. aprila 2022 in 6. julija 2021.
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
