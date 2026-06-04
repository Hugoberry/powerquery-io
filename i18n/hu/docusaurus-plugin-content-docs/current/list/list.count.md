---
title: List.Count
---

# List.Count


A listán szereplő elemek számát adja vissza.


## Syntax

```powerquery
List.Count(
    list as list
) as number
```


## Remarks

A megadott lista elemeinek számát adja vissza.

-   `list`: A vizsgálandó lista.


## Examples

### Example #1
Az \{1, 2, 3\} listán levő értékek számának meghatározása
```powerquery
List.Count({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2
Megkeresi, hogy hányszor jelenik meg a piros szín a színek listájában, a kis- és nagybetűket figyelmen kívül hagyva.
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
Megszámolja, hogy a listán hány olyan ügyfél van, aki több mint 100 dollár értékben vásárolt.
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
