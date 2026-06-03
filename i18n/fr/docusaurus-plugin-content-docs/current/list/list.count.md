---
title: List.Count
---

# List.Count


Retourne le nombre d'éléments dans la liste.


## Syntax

```powerquery
List.Count(
    list as list
) as number
```


## Remarks

Retourne le nombre d’éléments dans la liste spécifiée.

-   `list` : liste à examiner.


## Examples

### Example #1
Recherche le nombre de valeurs dans la liste \{1, 2, 3\}.
```powerquery
List.Count({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2
Recherchez le nombre de fois où le rouge apparaît dans une liste de couleurs, en ignorant la casse.
```powerquery
let
    colors = {"Red", "Blue", "GREEN", "red", "Yellow", "RED"},
    redCount = List.Count(
        List.Select(colors, each Text.Lower(_) = "red")
    )
in
    redCount
```

Result: 
```powerquery
3
```


### Example #3
Recherchez le nombre de clients dans une liste qui ont acheté plus de 100 $.
```powerquery
let
    customers = {
        [CustomerID = 101, CustomerName = "Alice", AmountPurchased = 150],
        [CustomerID = 102, CustomerName = "Bob", AmountPurchased = 75],
        [CustomerID = 103, CustomerName = "Carol", AmountPurchased = 50],
        [CustomerID = 104, CustomerName = "Dave", AmountPurchased = 90],
        [CustomerID = 105, CustomerName = "Eve", AmountPurchased = 120]
    },
    highValueCustomerCount = List.Count(
        List.Select(customers, each [AmountPurchased] > 100)
    )
in
    highValueCustomerCount
```

Result: 
```powerquery
2
```




## Category
List.Information
