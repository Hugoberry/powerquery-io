---
title: Table.FirstN
---

# Table.FirstN


Trả về các hàng đếm đầu tiên được chỉ định.


## Syntax

```powerquery
Table.FirstN(
    table as table,
    countOrCondition as any
) as table
```


## Remarks

Trả về (các) hàng đầu tiên của bảng <code>table</code>, tùy theo giá trị của <code>countOrCondition</code>:    <ul>    <li> Nếu <code>countOrCondition</code> là một số thì nhiều hàng (bắt đầu ở trên cùng) sẽ được trả về. </li>    <li> Nếu <code>countOrCondition</code> là một điều kiện thì các hàng đáp ứng điều kiện này sẽ được trả về cho đến khi một hàng không đáp ứng điều kiện.</li></ul>


## Examples

### Example #1 
Tìm hai hàng đầu tiên của bảng.
```powerquery
Table.FirstN(
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
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```


### Example #2 
Tìm các hàng đầu tiên trong đó [a] &gt; 0 trong bảng.
```powerquery
Table.FirstN(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4],
        [a = -5, b = -6]
    }),
    each [a] > 0
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 1, b = 2],
    [a = 3, b = 4]
})
```




## Category
Table.Row operations
