---
title: DataLake.Contents
---

# DataLake.Contents


Nhập URL tài khoản Azure Data Lake Storage thế hệ 1 của bạn.


## Syntax

```powerquery
DataLake.Contents(
    url as text,
    optional options as record
) as table
```


## Remarks

Trả về bảng chứa một hàng của mỗi thư mục và tệp tìm thấy trên <code>URL</code> của Azure Data Lake Storage thế hệ 1. Mỗi hàng đều chứa thuộc tính của thư mục hoặc tệp cũng như đường dẫn đến nội dung của tệp hoặc thư mục đó.


