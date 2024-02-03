---
title: Record.FromList
---

# Record.FromList


## Description

Trả về một bản ghi khi được cho sẵn danh sách giá trị trường và tập hợp trường.


## Syntax

```powerquery
Record.FromList(
    list as list,
    fields as any
) as record
```


## Details

Trả về một bản ghi khi được cho sẵn <code>list</code> giá trị trường và tập hợp trường.  Có thể chỉ định <code>fields</code> bằng danh sách giá trị văn bản hoặc loại bản ghi.  Lỗi được đưa ra nếu các trường không phải là duy nhất.


## Examples

### Example #1 
Tạo bản ghi từ danh sách giá trị trường và danh sách tên trường.
```powerquery
Record.FromList({1, "Bob", "123-4567"}, {"CustomerID", "Name", "Phone"})
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```


### Example #2 
Tạo bản ghi từ danh sách giá trị trường và loại bản ghi.
```powerquery
Record.FromList({1, "Bob", "123-4567"}, type [CustomerID = number, Name = text, Phone = number])
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Serialization
