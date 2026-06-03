---
title: List.Count
---

# List.Count


Returnerar antalet objekt i listan.


## Syntax

```powerquery
List.Count(
    list as list
) as number
```


## Remarks

Returnerar antalet objekt i den angivna listan.

-   `list`: Listan som ska undersökas.


## Examples

### Example #1
Hitta antalet värden i listan \{1, 2, 3\}.
```powerquery
List.Count({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2
Räkna hur många gånger rött förekommer i en lista med färger, utan att ta hänsyn till versaler och gemener.
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
Räkna antalet kunder i en lista som handlat för mer än 100 USD.
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
