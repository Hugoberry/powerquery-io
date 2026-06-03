---
title: List.Count
---

# List.Count


傳回清單中的項目數。


## Syntax

```powerquery
List.Count(
    list as list
) as number
```


## Remarks

傳回指定清單中的項目數。

-   `list`: 要檢查的清單。


## Examples

### Example #1
找出清單 \{1, 2, 3\} 中值的數目。
```powerquery
List.Count({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2
找出紅色在顏色清單中出現的次數，忽略大小寫。
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
找出清單中購買金額超過 $100 美元的客戶人數。
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
