---
title: List.ContainsAny
---

# List.ContainsAny


Indique si une liste inclut l'une des valeurs d'une autre liste.


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Indique si la liste contient l’une des valeurs d’une autre liste. Retourne `true` si les valeurs sont trouvées dans la liste, `false` sinon.

-   `list` : La liste à rechercher.
-   `values` : La liste de valeurs à rechercher dans la première liste.
-   `equationCriteria` : (Facultatif) Le comparateur utilisé pour déterminer si deux valeurs sont égales.


## Examples

### Example #1
Détermine si la liste \{1, 2, 3, 4, 5\} contient 3 ou 9.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2
Détermine si la liste \{1, 2, 3, 4, 5\} contient 6 ou 7.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```


### Example #3
Déterminer si la liste contient un cheval ou un hibou, en ignorant les cas.
```powerquery
List.ContainsAny({"dog", "cat", "racoon", "horse", "rabbit"}, {"Horse", "OWL"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Déterminez si la liste contient une date du 8 avril 2022 ou du 12 janvier 2021.
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
