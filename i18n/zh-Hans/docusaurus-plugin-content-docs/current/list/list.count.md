---
title: List.Count
---

# List.Count


返回列表中的项数。


## Syntax

```powerquery
List.Count(
    list as list
) as number
```


## Remarks

返回指定列表中的项数。

-   `list`: 要检查的列表。


## Examples

### Example #1
查看列表 \{1, 2, 3\} 中的值数。
```powerquery
List.Count({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2
查找颜色列表中 red 出现的次数，忽略大小写。
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
查找列表中购买金额超过 100 美元的客户数量。
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
