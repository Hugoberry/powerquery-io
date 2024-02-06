---
title: Folder.Files
---

# Folder.Files


Trả về một bảng chứa thuộc tính và nội dung của các tệp cũng như thư mục tìm được trong thư mục và thư mục con được chỉ định.


## Syntax

```powerquery
Folder.Files(
    path as text,
    optional options as record
) as table
```


## Remarks

Trả về một bảng chứa một hàng cho mỗi và tệp tìm được trong thư mục <code>path</code> và tất cả thư mục con của thư mục. Mỗi hàng chứa thuộc tính của tệp và một liên kết tới nội dung của tệp đó. Tham số <code>options</code> hiện chỉ nhằm mục đích sử dụng nội bộ.



## Category
Accessing data
