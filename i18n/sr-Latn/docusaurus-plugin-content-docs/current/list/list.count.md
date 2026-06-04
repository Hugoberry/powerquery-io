---
title: List.Count
---

# List.Count


Vraća broj stavki na listi.


## Syntax

```powerquery
List.Count(
    list as list
) as number
```


## Remarks

Vraća broj stavki u navedenoj listi.

-   `list`: Lista za ispitivanje.


## Examples

### Example #1
Pronalaženje broja vrednosti na listi \{1, 2, 3\}.
```powerquery
List.Count({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2
Pronađite koliko se puta crvena pojavljuje na listi boja, zanemarujući velika i mala slova.
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
Pronađite broj kupaca na listi koji su kupili za više od 100 USD.
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
