---
title: List.Count
---

# List.Count


सूची के आइटमों की संख्या लौटाता है.


## Syntax

```powerquery
List.Count(
    list as list
) as number
```


## Remarks

निर्दिष्ट सूची के आइटम्स की संख्या लौटाता है.

-   `list`: जाँच की जाने वाली सूची.


## Examples

### Example #1
सूची \{1, 2, 3\} के मानों की संख्या प्राप्त करें.
```powerquery
List.Count({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2
केस को अनदेखा करते हुए, रंगों की सूची में लाल रंग के आने की संख्या ज्ञात करें.
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
सूची में उन ग्राहकों की संख्या ज्ञात करें जिन्होंने $100 से अधिक की खरीदारी की है.
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
