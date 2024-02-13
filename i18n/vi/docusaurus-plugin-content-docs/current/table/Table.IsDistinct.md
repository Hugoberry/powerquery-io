---
title: Table.IsDistinct
---

# Table.IsDistinct


Cho biết bảng chỉ chứa các hàng riêng biệt (không trùng lặp) hay không.


## Syntax

```powerquery
Table.IsDistinct(
    table as table,
    optional comparisonCriteria as any
) as logical
```


## Remarks

Cho biết <code>table</code> chỉ chứa các hàng riêng biệt (không trùng lặp) hay không. Trả về <code>true</code> nếu các hàng riêng biệt, <code>false</code> nếu ngược lại.    Tham số tùy chọn <code>comparisonCriteria</code> chỉ định cột nào của bảng được kiểm tra tính trùng lặp. Nếu <code>comparisonCriteria</code> không được chỉ định thì tất cả các cột đều được kiểm tra.


## Examples

### Example #1 
Xác định bảng có riêng biệt không.
```powerquery
Table.IsDistinct(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    })
)
```

Result: 
```powerquery
true
```


### Example #2 
Xác định bảng có riêng biệt trong cột hay không.
```powerquery
Table.IsDistinct(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 5, Name = "Bob", Phone = "232-1550"]
    }),
    "Name"
)
```

Result: 
```powerquery
false
```




## Category
Table.Membership
