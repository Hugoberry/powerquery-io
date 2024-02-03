---
title: Table.ContainsAll
---

# Table.ContainsAll


## Description

Cho biết tất cả các bản ghi được chỉ định có xuất hiện ở dạng các hàng trong bảng hay không.


## Syntax

```powerquery
Table.ContainsAll(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Details

Cho biết tất cả các bản ghi được chỉ định trong danh sách bản ghi <code>rows</code> có xuất hiện ở dạng các hàng trong <code>table</code> hay không.    Có thể chỉ định tham số tùy chọn <code>equationCriteria</code> để kiểm soát phép so sánh giữa các hàng của bảng.


## Examples

### Example #1 
Xác định bảng có chứa tất cả các hàng so sánh chỉ một cột [CustomerID] hay không.
```powerquery
Table.ContainsAll(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {
        [CustomerID = 1, Name = "Bill"],
        [CustomerID = 2, Name = "Fred"]
    },
    "CustomerID"
)
```

Result: 
```powerquery
true
```


### Example #2 
Xác định bảng có chứa tất cả các hàng hay không.
```powerquery
Table.ContainsAll(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {
        [CustomerID = 1, Name = "Bill"],
        [CustomerID = 2, Name = "Fred"]
    }
)
```

Result: 
```powerquery
false
```




## Category
Table.Membership
