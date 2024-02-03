---
title: Table.RemoveFirstN
---

# Table.RemoveFirstN


## Description

Trả về một bảng chứa các hàng đếm đầu tiên bị bỏ qua.


## Syntax

```powerquery
Table.RemoveFirstN(
    table as table,
    optional countOrCondition as any
) as table
```


## Details

Trả về một bảng không chứa số lượng hàng được chỉ định đầu tiên <code>countOrCondition</code> của bảng <code>table</code>.    Số lượng hàng bị loại bỏ tùy theo tham số tùy chọn <code>countOrCondition</code>.    <ul>    <li> Nếu <code>countOrCondition</code> bị bỏ qua thì chỉ hàng đầu tiên bị loại bỏ. </li>    <li> Nếu <code>countOrCondition</code> là một số thì nhiều hàng (bắt đầu từ trên cùng) sẽ bị loại bỏ. </li>    <li> Nếu <code>countOrCondition</code> là một điều kiện thì các hàng đáp ứng điều kiện này sẽ bị loại bỏ cho đến khi một hàng không đáp ứng điều kiện.</li>    </ul>


## Examples

### Example #1 
Loại bỏ hàng đầu tiên của bảng.
```powerquery
Table.RemoveFirstN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    1
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```


### Example #2 
Loại bỏ hai hàng đầu tiên của bảng.
```powerquery
Table.RemoveFirstN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    2
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```


### Example #3 
Loại bỏ các hàng đầu tiên trong đó [CustomerID] &lt;=2 của bảng.
```powerquery
Table.RemoveFirstN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    each [CustomerID] <= 2
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```




## Category
Table.Row operations
