---
title: Hdfs.Contents
---

# Hdfs.Contents


Trả về một bảng chứa thuộc tính và nội dung của các tệp cũng như thư mục tìm được trong thư mục được chỉ định từ hệ thống tệp Hadoop.


## Syntax

```powerquery
Hdfs.Contents(
    url as text
) as table
```


## Remarks

Trả về một bảng chứa một hàng cho mỗi thư mục và tệp tìm được tại URL mục, <code>url</code>, từ hệ thống tệp Hadoop. Mỗi hàng chứa thuộc tính của thư mục hoặc tệp và một liên kết tới nội dung của thư mục/tệp đó.



## Category
Accessing data
