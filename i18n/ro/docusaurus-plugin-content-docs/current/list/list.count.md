---
title: List.Count
---

# List.Count


Returnează numărul de elemente din listă.


## Syntax

```powerquery
List.Count(
    list as list
) as number
```


## Remarks

Returnează numărul de elemente din lista specificată.

-   `list`: lista de examinat.


## Examples

### Example #1
Aflaţi numărul de valori din lista \{1, 2, 3\}.
```powerquery
List.Count({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2
Găsiți de câte ori apare culoarea roșie într-o listă de culori, ignorând diferențele dintre majuscule și minuscule.
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
Găsiți numărul de clienți dintr-o listă care au cumpărat produse în valoare de peste 100 $.
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
