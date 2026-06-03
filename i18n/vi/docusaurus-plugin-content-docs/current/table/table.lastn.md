---
title: Table.LastN
---

# Table.LastN


Trả về số lượng hàng được chỉ định cuối cùng.


## Syntax

```powerquery
Table.LastN(
    table as table,
    countOrCondition as any
) as table
```


## Remarks

Trả về (các) hàng cuối cùng từ bảng `table` tùy theo giá trị của `countOrCondition`:

-   Nếu `countOrCondition` là một số thì nhiều hàng sẽ được trả về bắt đầu từ vị trí (kết thúc bằng - `countOrCondition`).
-   Nếu `countOrCondition` là một điều kiện thì các hàng đáp ứng điều kiện này sẽ được trả về theo vị trí tăng dần cho đến khi một hàng không đáp ứng điều kiện.


## Examples

### Example #1
Tìm hai hàng cuối cùng của bảng.
```powerquery
Table.LastN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    }),
    2
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```


### Example #2
Tìm các hàng cuối cùng trong đó \[a\] > 0 trong bảng.
```powerquery
Table.LastN(
    Table.FromRecords({
        [a = -1, b = -2],
        [a = 3, b = 4],
        [a = 5, b = 6]
    }),
    each _ [a] > 0
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 3, b = 4],
    [a = 5, b = 6]
})
```




## Category
Table.Row operations
