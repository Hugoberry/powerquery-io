---
title: Table.IsEmpty
---

# Table.IsEmpty


Cho biết bảng có chứa hàng hay không.


## Syntax

```powerquery
Table.IsEmpty(
    table as table
) as logical
```


## Remarks

Cho biết `table` có chứa hàng hay không. Trả về `true` nếu không có hàng nào (tức là bảng trống), `false` nếu ngược lại.


## Examples

### Example #1
Xác định bảng có trống hay không.
```powerquery
Table.IsEmpty(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
false
```


### Example #2
Xác định bảng `({})` có trống hay không.
```powerquery
Table.IsEmpty(Table.FromRecords({}))
```

Result: 
```powerquery
true
```




## Category
Table.Information
