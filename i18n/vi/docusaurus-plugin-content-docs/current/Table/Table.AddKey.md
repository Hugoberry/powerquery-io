---
title: Table.AddKey
---

# Table.AddKey


Thêm một khóa vào bảng.


## Syntax

```powerquery
Table.AddKey(
    table as table,
    columns as list,
    isPrimary as logical
) as table
```


## Remarks

Thêm một khóa vào <code>table</code>, trong đó <code>columns</code> là danh sách bao gồm các tên cột xác định khóa và <code>isPrimary</code> chỉ định đó có phải là khóa chính không.


## Examples

### Example #1 
Thêm một khóa chính cột đơn vào bảng.
```powerquery
let
    table = Table.FromRecords({
        [Id = 1, Name = "Hello There"],
        [Id = 2, Name = "Good Bye"]
    }),
    resultTable = Table.AddKey(table, {"Id"}, true)
in
    resultTable
```

Result: 
```powerquery
Table.FromRecords({
    [Id = 1, Name = "Hello There"],
    [Id = 2, Name = "Good Bye"]
})
```




## Category
Table.Transformation
