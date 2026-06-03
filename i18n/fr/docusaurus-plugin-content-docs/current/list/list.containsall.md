---
title: List.ContainsAll
---

# List.ContainsAll


Indique si une liste inclut toutes les valeurs d'une autre liste.


## Syntax

```powerquery
List.ContainsAll(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Indique si la liste contient toutes les valeurs d’une autre liste. Retourne `true` si toutes les valeurs sont trouvées dans la liste, `false` sinon.

-   `list` : La liste à rechercher.
-   `values` : La liste de valeurs à rechercher dans la première liste.
-   `equationCriteria` : (Facultatif) Le comparateur utilisé pour déterminer si deux valeurs sont égales.


## Examples

### Example #1
Détermine si la liste \{1, 2, 3, 4, 5\} contient 3 et 4.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {3, 4})
```

Result: 
```powerquery
true
```


### Example #2
Détermine si la liste \{1, 2, 3, 4, 5\} contient 5 et 6.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {5, 6})
```

Result: 
```powerquery
false
```


### Example #3
Déterminez si la liste contient un chien et un cheval, tout en ignorant la casse.
```powerquery
List.ContainsAll({"dog", "cat", "racoon", "horse", "rabbit"}, {"DOG", "Horse"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Déterminez si la liste contient les dates du 8 avril 2022 et du 6 juillet 2021.
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
