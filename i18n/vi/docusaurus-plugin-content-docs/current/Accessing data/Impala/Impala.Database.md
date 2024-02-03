---
title: Impala.Database
---

# Impala.Database


## Description

Nhập dữ liệu từ cụm Impala


## Syntax

```powerquery
Impala.Database(
    server as text,
    optional options as record
) as table
```


## Details

Nhập dữ liệu từ cụm Impala <code>server</code>. Nếu bạn chưa chỉ định cổng thì cổng mặc định 21050 sẽ được sử dụng.


## Examples

### Example #1 
Liệt kê các bảng trong cụm Impala.
```powerquery
Impala.Database("localhost:21050")
```



