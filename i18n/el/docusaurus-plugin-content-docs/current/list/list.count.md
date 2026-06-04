---
title: List.Count
---

# List.Count


Επιστρέφει τον αριθμό των στοιχείων της λίστας.


## Syntax

```powerquery
List.Count(
    list as list
) as number
```


## Remarks

Επιστρέφει τον αριθμό των στοιχείων στην καθορισμένη λίστα.

-   `list`: Η λίστα προς εξέταση.


## Examples

### Example #1
Βρείτε τον αριθμό των τιμών της λίστας \{1, 2, 3\}.
```powerquery
List.Count({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2
Να βρείτε τον αριθμό των φορών που εμφανίζεται το κόκκινο σε μια λίστα χρωμάτων, αγνοώντας την πεζή και την κεφαλαία.
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
Βρείτε τον αριθμό των πελατών σε μια λίστα που αγόρασαν περισσότερα από 100 $.
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
