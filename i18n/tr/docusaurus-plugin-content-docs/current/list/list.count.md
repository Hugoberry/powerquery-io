---
title: List.Count
---

# List.Count


Listedeki öğe sayısını döndürür.


## Syntax

```powerquery
List.Count(
    list as list
) as number
```


## Remarks

Belirtilen listedeki öğe sayısını döndürür.

-   `list`: İncelenecek liste.


## Examples

### Example #1
\{1, 2, 3\} listesindeki değerlerin sayısını bulur.
```powerquery
List.Count({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2
Büyük/küçük harf ayrımı yapmadan, bir renk listesinde kırmızının kaç kez geçtiğini bulun.
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
Bir listede 100 ABD dolarından fazla alışveriş yapan müşterilerin sayısını bulun.
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
