---
title: List.Count
---

# List.Count


Menghasilkan jumlah item dalam daftar.


## Syntax

```powerquery
List.Count(
    list as list
) as number
```


## Remarks

Menghasilkan jumlah item dalam daftar yang ditentukan.

-   `list`: Daftar yang akan diperiksa.


## Examples

### Example #1
Mencari jumlah nilai dalam daftar \{1, 2, 3\}.
```powerquery
List.Count({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2
Temukan berapa kali merah muncul dalam daftar warna, tanpa peka huruf besar/kecil.
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
Temukan jumlah pelanggan dalam daftar yang membeli lebih dari $100.
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
