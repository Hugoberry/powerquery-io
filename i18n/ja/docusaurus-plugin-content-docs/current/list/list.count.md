---
title: List.Count
---

# List.Count


リスト内の項目の数を返します。


## Syntax

```powerquery
List.Count(
    list as list
) as number
```


## Remarks

指定したリスト内の項目の数を返します。

-   `list`: 調べるリスト。


## Examples

### Example #1
リスト \{1, 2, 3\} 内の値の数を求めます。
```powerquery
List.Count({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2
色の一覧の中で red が出現される回数を検出します。大文字と小文字は区別しません。
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
一覧内で購入額が $100 を超える顧客の数を検出します。
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
