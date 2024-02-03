---
title: Table.PrefixColumns
---

# Table.PrefixColumns


## Description

Trả về một bảng trong đó tất cả các cột đều đã được thêm tiền tố là văn bản cho sẵn.


## Syntax

```powerquery
Table.PrefixColumns(
    table as table,
    prefix as text
) as table
```


## Details

Trả về một bảng trong đó tất cả tên cột từ <code>table</code> cho sẵn đều được thêm tiền tố là văn bản <code>prefix</code> cho sẵn cùng với một dấu chấm ở dạng <code><code>prefix</code>.ColumnName</code>.


## Examples

### Example #1 
Thêm tiền tố &#34;MyTable&#34; cho các cột trong bảng.
```powerquery
Table.PrefixColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "MyTable"
)
```

Result: 
```powerquery
Table.FromRecords({[MyTable.CustomerID = 1, MyTable.Name = "Bob", MyTable.Phone = "123-4567"]})
```




## Category
Table.Column operations
