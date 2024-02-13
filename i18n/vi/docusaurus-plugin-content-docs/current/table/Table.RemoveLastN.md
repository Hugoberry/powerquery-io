---
title: Table.RemoveLastN
---

# Table.RemoveLastN


Trả về một bảng có N hàng cuối cùng bị loại bỏ.


## Syntax

```powerquery
Table.RemoveLastN(
    table as table,
    optional countOrCondition as any
) as table
```


## Remarks

Trả về một bảng không chứa <code>countOrCondition</code> hàng cuối cùng của bảng <code>table</code>.        Số lượng hàng bị loại bỏ tùy theo tham số tùy chọn <code>countOrCondition</code>.    <ul>    <li> Nếu <code>countOrCondition</code> bị bỏ qua thì chỉ hàng cuối cùng bị loại bỏ. </li>    <li> Nếu <code>countOrCondition</code> là một số thì nhiều hàng (bắt đầu từ cuối) sẽ bị loại bỏ. </li>    <li> Nếu <code>countOrCondition</code> là một điều kiện thì các hàng đáp ứng điều kiện này sẽ bị loại bỏ cho đến khi một hàng không đáp ứng điều kiện.</li>    </ul>


## Examples

### Example #1 
Xóa hàng cuối cùng của bảng.
```powerquery
Table.RemoveLastN(
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
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```


### Example #2 
Loại bỏ các hàng cuối cùng trong đó [CustomerID] &gt; 2 của bảng.
```powerquery
Table.RemoveLastN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    each [CustomerID] >= 2
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Row operations
