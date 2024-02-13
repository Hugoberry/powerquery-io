---
title: Table.HasColumns
---

# Table.HasColumns


Cho biết bảng có chứa (các) cột được chỉ định hay không.


## Syntax

```powerquery
Table.HasColumns(
    table as table,
    columns as any
) as logical
```


## Remarks

Cho biết <code>table</code> có chứa (các) cột được chỉ định <code>columns</code> hay không. Trả về <code>true</code> nếu bảng chứa (các) cột, <code>false</code> nếu ngược lại.


## Examples

### Example #1 
Xác định bảng có chứa cột [Name] hay không.
```powerquery
Table.HasColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Name"
)
```

Result: 
```powerquery
true
```


### Example #2 
Tìm xem bảng có cột [Name] và [PhoneNumber] hay không.
```powerquery
Table.HasColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {"Name", "PhoneNumber"}
)
```

Result: 
```powerquery
false
```




## Category
Table.Column operations
