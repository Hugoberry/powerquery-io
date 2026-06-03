---
title: List.Count
---

# List.Count


ส่งกลับจำนวนข้อมูลในรายการ


## Syntax

```powerquery
List.Count(
    list as list
) as number
```


## Remarks

ส่งกลับจำนวนของรายการในรายการที่ระบุ

-   `list`: รายการที่จะตรวจสอบ


## Examples

### Example #1
หาจำนวนของค่าในรายการ \{1, 2, 3\}
```powerquery
List.Count({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2
ค้นหาจำนวนครั้งที่สีแดงปรากฏในรายการสี โดยไม่สนใจตัวพิมพ์
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
ค้นหาจำนวนลูกค้าในรายการที่ซื้อมากกว่า $100
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
