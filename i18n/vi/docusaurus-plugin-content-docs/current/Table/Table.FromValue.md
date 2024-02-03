---
title: Table.FromValue
---

# Table.FromValue


## Description

Tạo một bảng với một cột từ (các) giá trị cho sẵn.


## Syntax

```powerquery
Table.FromValue(
    value as any,
    optional options as record
) as table
```


## Details

Tạo bảng có cột chứa giá trị hoặc danh sách giá trị đã cung cấp, <code>value</code>. Tham số bản ghi tùy chọn, <code>options</code>, có thể được chỉ định để kiểm soát các tùy chọn sau:    <ul>    <li> <code>DefaultColumnName</code> : Tên cột được sử dụng khi xây dựng bảng từ một giá trị danh sách hoặc giá trị vô hướng.</li>    </ul>  


## Examples

### Example #1 
Tạo một bảng từ giá trị 1.
```powerquery
Table.FromValue(1)
```

Result: 
```powerquery
Table.FromRecords({[Value = 1]})
```


### Example #2 
Tạo một bảng từ danh sách.
```powerquery
Table.FromValue({1, "Bob", "123-4567"})
```

Result: 
```powerquery
Table.FromRecords({
    [Value = 1],
    [Value = "Bob"],
    [Value = "123-4567"]
})
```


### Example #3 
Tạo bảng từ giá trị 1, có tên cột tùy chỉnh.
```powerquery
Table.FromValue(1, [DefaultColumnName = "MyValue"])
```

Result: 
```powerquery
Table.FromRecords({[MyValue = 1]})
```




## Category
Table.Table construction
