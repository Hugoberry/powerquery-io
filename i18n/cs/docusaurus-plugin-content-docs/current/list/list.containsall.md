---
title: List.ContainsAll
---

# List.ContainsAll


Značí, kde seznam obsahuje všechny hodnoty jiného seznamu.


## Syntax

```powerquery
List.ContainsAll(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Určuje, jestli seznam obsahuje všechny hodnoty z jiného seznamu. Vrátí `true`, pokud jsou v seznamu nalezeny všechny hodnoty, jinak `false`.

-   `list`: Seznam, který se má prohledat.
-   `values`: Seznam hodnot, které se mají vyhledat v prvním seznamu
-   `equationCriteria`: (Volitelné) Porovnávač, který se používá k určení, jestli jsou dvě hodnoty stejné.


## Examples

### Example #1
Určit, jestli seznam \{1, 2, 3, 4, 5\} obsahuje 3 a 4
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {3, 4})
```

Result: 
```powerquery
true
```


### Example #2
Určit, jestli seznam \{1, 2, 3, 4, 5\} obsahuje 5 a 6
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {5, 6})
```

Result: 
```powerquery
false
```


### Example #3
Určit, jestli seznam obsahuje psa (dog) a koně (horse) (s ignorováním malých a velkých písmen)
```powerquery
List.ContainsAll({"dog", "cat", "racoon", "horse", "rabbit"}, {"DOG", "Horse"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Určit, jestli seznam obsahuje data 8. dubna 2022 a 6. července 2021
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
