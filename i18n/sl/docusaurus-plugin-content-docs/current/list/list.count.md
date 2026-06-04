---
title: List.Count
---

# List.Count


Vrne število elementov na seznamu.


## Syntax

```powerquery
List.Count(
    list as list
) as number
```


## Remarks

Vrne število elementov na navedenem seznamu.

-   `list`: seznam za pregled.


## Examples

### Example #1
Poiščite število vrednosti na seznamu \{1, 2, 3\}.
```powerquery
List.Count({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2
Poiščite, kolikokrat je rdeča barva prikazana na seznamu barv, ne glede na velike ali male črke.
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
Poiščite število strank na seznamu, ki so kupile za več kot 100 USD.
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
