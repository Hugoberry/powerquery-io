---
title: List.Count
---

# List.Count


Vráti počet položiek v zozname.


## Syntax

```powerquery
List.Count(
    list as list
) as number
```


## Remarks

Vráti počet položiek v zadanom zozname.

-   `list`: Zoznam, ktorý sa má preskúmať.


## Examples

### Example #1
Zistite počet hodnôt v zozname \{1, 2, 3\}.
```powerquery
List.Count({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2
Nájdite počet výskytov červenej farby v zozname farieb bez ohľadu na veľkosť písmen.
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
Nájdite počet zákazníkov v zozname, ktorí nakúpili za viac ako 100 USD.
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
