---
title: List.Count
---

# List.Count


Возвращает число элементов в списке.


## Syntax

```powerquery
List.Count(
    list as list
) as number
```


## Remarks

Возвращает количество элементов в указанном списке.

-   `list`: список для проверки.


## Examples

### Example #1
Определить количество значений в списке \{1, 2, 3\}.
```powerquery
List.Count({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2
Определить, сколько раз красный цвет встречается в списке цветов, игнорируя регистр.
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
Найти количество клиентов в списке, которые совершили покупку на сумму более 100 долларов США.
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
