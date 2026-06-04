---
title: List.Count
---

# List.Count


Palauttaa luettelon kohteiden määrän.


## Syntax

```powerquery
List.Count(
    list as list
) as number
```


## Remarks

Palauttaa määritetyn luettelon kohteiden määrän.

-   `list`: Tutkittava luettelo.


## Examples

### Example #1
Selvitä luettelon \{1, 2, 3\} arvojen määrä
```powerquery
List.Count({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2
Laske, kuinka monta kertaa punainen esiintyy väriluettelossa kirjainkokoa huomioimatta.
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
Laske, kuinka monta asiakasta listassa osti yli 100 dollarin edestä.
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
