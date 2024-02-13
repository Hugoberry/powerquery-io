---
title: Table.ReverseRows
---

# Table.ReverseRows


Trả về một bảng có các hàng theo thứ tự đảo ngược.


## Syntax

```powerquery
Table.ReverseRows(
    table as table
) as table
```


## Remarks

Trả về một bảng có các hàng từ đầu vào <code>table</code> theo thứ tự đảo ngược.


## Examples

### Example #1 
Đảo ngược các hàng trong bảng.
```powerquery
Table.ReverseRows(
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
Table.FromRecords({
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"]
})
```




## Category
Table.Row operations
