---
title: DataLake.Files
---

# DataLake.Files


## Description

Nhập URL của tài khoản Azure Data Lake Storage của bạn.


## Syntax

```powerquery
DataLake.Files(
    url as text,
    optional options as record
) as table
```


## Details

Trả về bảng chứa một hàng của mỗi tệp tìm thấy trên <code>URL</code>, của Azure Data Lake Storage thế hệ 1. Mỗi hàng đều chứa thuộc tính của tệp và liên kết tới nội dung của tệp đó.


