---
title: List.ContainsAny
---

# List.ContainsAny


Značí, kde seznam obsahuje jakoukoliv hodnotu jiného seznamu.


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Určuje, jestli seznam obsahuje některou z hodnot z jiného seznamu. Vrátí `true`, pokud jsou hodnoty nalezeny v seznamu, jinak `false`.

-   `list`: Seznam, který se má prohledat.
-   `values`: Seznam hodnot, které se mají vyhledat v prvním seznamu
-   `equationCriteria`: (Volitelné) Porovnávač, který se používá k určení, jestli jsou dvě hodnoty stejné.


## Examples

### Example #1
Určit, jestli seznam \{1, 2, 3, 4, 5\} obsahuje 3 nebo 9
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2
Určit, jestli seznam \{1, 2, 3, 4, 5\} obsahuje 6 nebo 7
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```


### Example #3
Určit, jestli seznam obsahuje koně (horse) nebo sovu (owl) (s ignorováním malých a velkých písmen)
```powerquery
List.ContainsAny({"dog", "cat", "racoon", "horse", "rabbit"}, {"Horse", "OWL"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Určit, jestli seznam obsahuje datum 8. dubna 2022 nebo 12. ledna 2021
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
