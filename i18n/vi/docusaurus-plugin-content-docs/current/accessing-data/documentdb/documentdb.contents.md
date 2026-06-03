---
title: DocumentDB.Contents
---

# DocumentDB.Contents


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


## Remarks

Trả về một bảng gồm các cơ sở dữ liệu Azure Cosmos DB tại `url`. Nếu `cơ sở dữ liệu` được chỉ định thì một bảng bộ sưu tập sẽ được trả về. Ngoài ra, nếu trường `Truy vấn` được chỉ định trong bản ghi`tùy chọn` thì kết quả của truy vấn được thực thi trên cơ sở dữ liệu và/hoặc bộ sưu tập đã chỉ định sẽ được trả về.


