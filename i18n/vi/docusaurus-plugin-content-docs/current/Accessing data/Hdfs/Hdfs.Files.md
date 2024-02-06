---
title: Hdfs.Files
---

# Hdfs.Files


Trả về một bảng chứa thuộc tính và nội dung của các tệp tìm được trong thư mục được chỉ định và thư mục con từ hệ thống tệp Hadoop.


## Syntax

```powerquery
Hdfs.Files(
    url as text
) as table
```


## Remarks

Trả về một bảng chứa một hàng cho mỗi thư mục và tệp tìm được tại URL mục <code>url</code>và các thư mục con từ hệ thống tệp Hadoop. Mỗi hàng chứa thuộc tính của tệp và một liên kết tới nội dung của tệp đó.



## Category
Accessing data
