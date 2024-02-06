---
title: Record.FromTable
---

# Record.FromTable


Tạo bản ghi từ bảng có dạng \{[Name = name, Value = value]}.


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Remarks

Trả về bản ghi từ bảng bản ghi <code>table</code> chứa tên trường và tên giá trị <code>\{[Name = name, Value = value]}</code>. Một ngoại lệ được đưa ra nếu các tên trường không phải là duy nhất.


## Examples

### Example #1 
Tạo bản ghi từ bảng có dạng Table.FromRecords(\{[Name = &#34;CustomerID&#34;, Value = 1], [Name = &#34;Name&#34;, Value = &#34;Bob&#34;], [Name = &#34;Phone&#34;, Value = &#34;123-4567&#34;]}).
```powerquery
Record.FromTable(
    Table.FromRecords({
        [Name = "CustomerID", Value = 1],
        [Name = "Name", Value = "Bob"],
        [Name = "Phone", Value = "123-4567"]
    })
)
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Serialization
