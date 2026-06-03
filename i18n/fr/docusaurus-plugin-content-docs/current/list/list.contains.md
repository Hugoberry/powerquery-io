---
title: List.Contains
---

# List.Contains


Indique si la liste contient la valeur.


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Remarks

Indique si la liste contient la valeur spécifiée. Retourne `true` si la valeur est trouvée dans la liste, `false` sinon.

-   `list` : La liste à rechercher.
-   `value` : La valeur à rechercher dans la liste.
-   `equationCriteria` : (Facultatif) Le comparateur utilisé pour déterminer si deux valeurs sont égales.


## Examples

### Example #1
Détermine si la liste \{1, 2, 3, 4, 5\} contient 3.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2
Détermine si la liste \{1, 2, 3, 4, 5\} contient 6.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```


### Example #3
En ne tenant pas compte de la casse, déterminez si la liste contient "rhubarbe".
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
Déterminez si la liste contient la date du 8 avril 2022.
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
