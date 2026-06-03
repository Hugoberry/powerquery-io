---
title: List.Count
---

# List.Count


Retourneert het aantal items in de lijst.


## Syntax

```powerquery
List.Count(
    list as list
) as number
```


## Remarks

Geeft het aantal items in de opgegeven lijst terug.

-   `list`: de lijst die moet worden onderzocht.


## Examples

### Example #1
Het aantal waarden zoeken in de lijst \{1, 2, 3\}.
```powerquery
List.Count({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2
Zoek hoe vaak rood voorkomt in een lijst met kleuren, zonder hoofdlettergebruik te onderscheiden.
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
Zoek het aantal klanten in een lijst die meer dan $100 hebben gekocht.
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
