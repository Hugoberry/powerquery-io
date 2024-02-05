---
title: Parquet.Document
---

# Parquet.Document


## Description

Trả về nội dung của tài liệu Parquet ở dạng bảng.


## Syntax

```powerquery
Parquet.Document(
    binary as binary,
    optional options as record
) as any
```


## Details

Trả về nội dung tài liệu Parquet dưới dạng bảng. Các tùy chọn bao gồm:    <ul>    <li> <code>TypeMapping</code> : Giá trị văn bản kiểm soát ánh xạ loại mặc định khi đọc và ghi tệp. Giá trị mặc định là null và cố gắng giữ nguyên độ trung thực nhiều nhất có thể với loại gốc. Giá trị "Sql" sẽ tạo kết quả tương thích nhất với Sql Server.</li>    </ul>



## Category
Đang truy cập vào dữ liệu
