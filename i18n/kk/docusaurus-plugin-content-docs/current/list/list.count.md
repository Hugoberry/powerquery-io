---
title: List.Count
---

# List.Count


Тізімдегі элементтер санын қайтарады.


## Syntax

```powerquery
List.Count(
    list as list
) as number
```


## Remarks

Арнайы тізімдегі элементтер санын қайтарады.

-   `list`: Тексерілетін тізім.


## Examples

### Example #1
\{1, 2, 3\} тізіміндегі мәндер санын анықтау.
```powerquery
List.Count({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2
Түстер тізімінде қызыл түс қанша рет кездесетінін регистрді елемей табу.
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
100 доллардан артық сатып алған клиенттердің санын табу.
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
