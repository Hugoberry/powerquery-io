---
title: List.Count
---

# List.Count


목록의 항목 수를 반환합니다.


## Syntax

```powerquery
List.Count(
    list as list
) as number
```


## Remarks

지정된 목록의 항목 수를 반환합니다.

-   `list`: 검사할 목록입니다.


## Examples

### Example #1
\{1, 2, 3\} 목록의 값 수를 확인합니다.
```powerquery
List.Count({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2
대/소문자를 무시하고 색 목록에 빨간색이 나타나는 횟수를 찾습니다.
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
목록에서 $100 이상을 구매한 고객 수를 찾습니다.
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
