---
title: List.Count
---

# List.Count


Zwraca liczbę elementów na liście.


## Syntax

```powerquery
List.Count(
    list as list
) as number
```


## Remarks

Zwraca liczbę elementów na określonej liście.

-   `list`: lista do zbadania.


## Examples

### Example #1
Znajdź liczbę wartości na liście \{1, 2, 3\}.
```powerquery
List.Count({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2
Znajdź liczbę wyświetleń koloru czerwonego na liście kolorów, ignorując wielkość liter.
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
Znajdź liczbę klientów na liście, którzy kupili za ponad 100 USD.
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
