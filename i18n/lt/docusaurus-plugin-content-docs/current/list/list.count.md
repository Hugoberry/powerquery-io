---
title: List.Count
---

# List.Count


Pateikiamas sąrašo elementų skaičius.


## Syntax

```powerquery
List.Count(
    list as list
) as number
```


## Remarks

Grąžinamas konkretaus sąrašo elementų skaičius.

-   `list`: tikrinimui skirtas sąrašas.


## Examples

### Example #1
Rasti sąrašo reikšmių skaičių \{1, 2, 3\}.
```powerquery
List.Count({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2
Raskite, kiek kartų spalvų sąraše rodoma raudona spalva, nepaisant atvejų.
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
Sąraše raskite klientų, kurie įsigijo už daugiau nei už 100 USD, skaičių.
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
