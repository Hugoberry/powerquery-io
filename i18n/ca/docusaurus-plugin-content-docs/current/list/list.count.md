---
title: List.Count
---

# List.Count


Retorna el nombre d'elements de la llista.


## Syntax

```powerquery
List.Count(
    list as list
) as number
```


## Remarks

Retorna el nombre d'elements de la llista especificada.

-   `list`: la llista que s'ha d'examinar.


## Examples

### Example #1
Troba el nombre de valors de la llista \{1, 2, 3\}.
```powerquery
List.Count({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2
Troba el nombre de vegades que apareix "vermell" en una llista de colors, sense tenir en compte majúscules i minúscules.
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
Troba el nombre de clients d’una llista que han fet compres de més de 100 $.
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
