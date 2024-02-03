---
title: Kusto.Contents
---

# Kusto.Contents


## Description

Nhập dữ liệu từ Trình khám phá dữ liệu Azure (Kusto)


## Syntax

```powerquery
Kusto.Contents(
    cluster as text,
    optional database as text,
    optional tableOrQuery as text,
    optional options as record
) as table
```


## Details

Nhập dữ liệu từ Trình khám phá dữ liệu Azure (phiên bản Kusto)


## Examples

### Example #1 
Trả về bảng thông tin Sự kiện màu bụi
```powerquery
Kusto.Contents("help", "Samples", "StormEvents", [])
```

Result: 
```powerquery
Bảng chứa các Sự kiện màu bụi trong cơ sở dữ liệu "Mẫu" thuộc cụm "trợ giúp"
```



