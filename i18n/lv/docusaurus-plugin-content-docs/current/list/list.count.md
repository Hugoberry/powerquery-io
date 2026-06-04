---
title: List.Count
---

# List.Count


Tiek atgriezts saraksta vienumu skaits.


## Syntax

```powerquery
List.Count(
    list as list
) as number
```


## Remarks

Atgriež norādītā saraksta vienumu skaitu.

-   `list`: saraksts, kas jāizpēta.


## Examples

### Example #1
Iegūstiet saraksta \{1, 2, 3\} vērtību skaitu.
```powerquery
List.Count({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2
Atrodiet, cik reižu krāsu sarakstā parādās sarkanā krāsa, neņemot vērā reģistru.
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
Atrodiet to klientu skaitu sarakstā, kuri iegādājās preces par vairāk nekā 100 USD.
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
