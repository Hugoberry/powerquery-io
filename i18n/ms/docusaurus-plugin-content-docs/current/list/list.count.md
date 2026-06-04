---
title: List.Count
---

# List.Count


Mengembalikan bilangan item dalam senarai.


## Syntax

```powerquery
List.Count(
    list as list
) as number
```


## Remarks

Mengembalikan bilangan item dalam senarai yang ditentukan.

-   `list`: Senarai untuk diperiksa.


## Examples

### Example #1
Cari bilangan nilai dalam senarai \{1, 2, 3\}.
```powerquery
List.Count({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2
Cari bilangan kali warna merah muncul dalam senarai warna, tanpa mengira huruf besar atau kecil.
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
Cari bilangan pelanggan dalam senarai yang membeli lebih daripada $100.
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
