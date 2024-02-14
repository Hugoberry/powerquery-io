---
title: Folder.Contents
---

# Folder.Contents


Trả về một bảng chứa thuộc tính và nội dung của các tệp cũng như thư mục tìm được trong thư mục được chỉ định.


## Syntax

```powerquery
Folder.Contents(
    path as text,
    optional options as record
) as table
```


## Remarks

Trả về một bảng chứa một hàng cho mỗi thư mục và tệp tìm được trong thư mục <code>path</code>. Mỗi hàng chứa thuộc tính của thư mục hoặc tệp và một liên kết tới nội dung của thư mục/tệp đó. Tham số <code>options</code> hiện chỉ nhằm mục đích sử dụng nội bộ.



## Category
Accessing data
