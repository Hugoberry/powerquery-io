---
title: List.Count
---

# List.Count


Повертає кількість елементів у списку.


## Syntax

```powerquery
List.Count(
    list as list
) as number
```


## Remarks

Повертає кількість елементів у вказаному списку.

-   `list`: список, який потрібно перевірити.


## Examples

### Example #1
Знайти кількість значень у списку \{1, 2, 3\}.
```powerquery
List.Count({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2
Визначте, скільки разів червоний колір зустрічається в списку кольорів, не враховуючи регістр.
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
Визначте кількість клієнтів у списку, які здійснили покупки на понад 100 доларів США.
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
