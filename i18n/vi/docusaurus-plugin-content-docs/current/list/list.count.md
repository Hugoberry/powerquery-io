---
title: List.Count
---

# List.Count


Trả về số lượng mục trong danh sách.


## Syntax

```powerquery
List.Count(
    list as list
) as number
```


## Remarks

Trả về số lượng mục trong danh sách được chỉ định.

-   `list`: Danh sách cần kiểm tra.


## Examples

### Example #1
Tìm số lượng giá trị trong danh sách \{1, 2, 3\}.
```powerquery
List.Count({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2
Tìm số lần màu đỏ xuất hiện trong danh sách các màu, không phân biệt chữ hoa chữ thường.
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
Tìm số lượng khách hàng trong danh sách đã mua hàng với tổng giá hơn 100 USD.
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
