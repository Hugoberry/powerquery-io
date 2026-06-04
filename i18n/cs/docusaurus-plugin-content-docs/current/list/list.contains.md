---
title: List.Contains
---

# List.Contains


Značí, zda seznam obsahuje hodnotu.


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Remarks

Určuje, jestli seznam obsahuje zadanou hodnotu. Vrátí `true`, pokud je hodnota nalezena v seznamu, jinak `false`.

-   `list`: Seznam, který se má prohledat.
-   `value`: Hodnota, kterou chcete vyhledat v seznamu.
-   `equationCriteria`: (Volitelné) Porovnávač, který se používá k určení, jestli jsou dvě hodnoty stejné.


## Examples

### Example #1
Určit, jestli seznam \{1, 2, 3, 4, 5\} obsahuje 3
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2
Určit, jestli seznam \{1, 2, 3, 4, 5\} obsahuje 6
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```


### Example #3
Zjistit se, jestli seznam obsahuje text „rhubarb“ (s ignorováním malých a velkých písmen)
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
Určit, jestli seznam obsahuje datum 8. dubna 2022
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
