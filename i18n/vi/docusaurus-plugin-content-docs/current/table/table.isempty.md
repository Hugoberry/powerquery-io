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

Cho biết <code>table</code> có chứa hàng hay không. Trả về <code>true</code> nếu không có hàng nào (tức là bảng trống), <code>false</code> nếu ngược lại.


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
Xác định bảng &lt;code&gt;(\{})&lt;/code&gt; có trống hay không.
```powerquery
Table.IsEmpty(Table.FromRecords({}))
```

Result: 
```powerquery
true
```




## Category
Table.Information
