---
title: Table.Skip
---

# Table.Skip


## Description

Trả về một bảng chứa các hàng đếm đầu tiên bị bỏ qua.


## Syntax

```powerquery
Table.Skip(
    table as table,
    optional countOrCondition as any
) as table
```


## Details

Trả về một bảng không chứa số lượng hàng được chỉ định đầu tiên <code>countOrCondition</code> của bảng <code>table</code>.    Số lượng hàng bị bỏ qua tùy theo tham số tùy chọn <code>countOrCondition</code>.    <ul>    <li> Nếu <code>countOrCondition</code> bị bỏ qua thì chỉ hàng đầu tiên bị bỏ qua. </li>    <li> Nếu <code>countOrCondition</code> là một số thì nhiều hàng (bắt đầu ở trên cùng) sẽ được bỏ qua. </li>    <li> Nếu <code>countOrCondition</code> là một điều kiện thì các hàng đáp ứng điều kiện này sẽ được bỏ qua cho đến khi một hàng không đáp ứng điều kiện.</li>    </ul>


## Examples

### Example #1 
Bỏ qua hàng đầu tiên của bảng.
```powerquery
Table.Skip(
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
Bỏ qua hai hàng đầu tiên của bảng.
```powerquery
Table.Skip(
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
Bỏ qua các hàng đầu tiên trong đó [Price] &gt; 25 của bảng.
```powerquery
Table.Skip(
    Table.FromRecords({
        [OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0],
        [OrderID = 2, CustomerID = 1, Item = "1 lb. worms", Price = 5.0],
        [OrderID = 3, CustomerID = 2, Item = "Fishing net", Price = 25.0],
        [OrderID = 4, CustomerID = 3, Item = "Fish tazer", Price = 200.0],
        [OrderID = 5, CustomerID = 3, Item = "Bandaids", Price = 2.0],
        [OrderID = 6, CustomerID = 1, Item = "Tackle box", Price = 20.0],
        [OrderID = 7, CustomerID = 5, Item = "Bait", Price = 3.25],
        [OrderID = 8, CustomerID = 5, Item = "Fishing Rod", Price = 100.0],
        [OrderID = 9, CustomerID = 6, Item = "Bait", Price = 3.25]
    }),
    each [Price] > 25
)
```

Result: 
```powerquery
Table.FromRecords({
    [OrderID = 2, CustomerID = 1, Item = "1 lb. worms", Price = 5],
    [OrderID = 3, CustomerID = 2, Item = "Fishing net", Price = 25],
    [OrderID = 4, CustomerID = 3, Item = "Fish tazer", Price = 200],
    [OrderID = 5, CustomerID = 3, Item = "Bandaids", Price = 2],
    [OrderID = 6, CustomerID = 1, Item = "Tackle box", Price = 20],
    [OrderID = 7, CustomerID = 5, Item = "Bait", Price = 3.25],
    [OrderID = 8, CustomerID = 5, Item = "Fishing Rod", Price = 100],
    [OrderID = 9, CustomerID = 6, Item = "Bait", Price = 3.25]
})
```




## Category
Table.Row operations
