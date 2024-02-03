---
title: DocumentDB.Contents
---

# DocumentDB.Contents


## Description

Nhập URL của tài khoản Azure Cosmos DB.


## Syntax

```powerquery
DocumentDB.Contents(
    url as text,
    optional database as text,
    optional collection as text,
    optional options as record
) as table
```


## Details

Trả về một bảng gồm các cơ sở dữ liệu Azure Cosmos DB tại <code>url</code>. Nếu <code>cơ sở dữ liệu</code> được chỉ định thì một bảng bộ sưu tập sẽ được trả về. Ngoài ra, nếu trường <code>Truy vấn</code> được chỉ định trong bản ghi<code>tùy chọn</code> thì kết quả của truy vấn được thực thi trên cơ sở dữ liệu và/hoặc bộ sưu tập đã chỉ định sẽ được trả về.


