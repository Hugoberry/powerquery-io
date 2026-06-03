---
title: List.Count
---

# List.Count


Gibt die Anzahl von Elementen in der Liste zurück.


## Syntax

```powerquery
List.Count(
    list as list
) as number
```


## Remarks

Gibt die Anzahl der Elemente in der angegebenen Liste zurück.

-   `list`: Die zu untersuchende Liste.


## Examples

### Example #1
Ermittelt die Anzahl von Werten in der Liste "\{1, 2, 3\}".
```powerquery
List.Count({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2
Ermitteln Sie, wie oft Rot in einer Liste von Farben vorkommt, ohne Groß-/Kleinbuchstaben zu beachten.
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
Ermitteln Sie die Anzahl der Kunden in einer Liste, die für mehr als 100 USD eingekauft haben.
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
