---
title: AzureDataExplorer.KqlDatabase
---

# AzureDataExplorer.KqlDatabase


Nhập dữ liệu từ cụm Fabric Kusto ở chế độ khám phá.


## Syntax

```powerquery
AzureDataExplorer.KqlDatabase(
    optional cluster as text,
    optional database as text,
    optional tableOrQuery as text,
    optional options as record
) as table
```


## Remarks

Nhập dữ liệu từ phiên bản Cơ sở dữ liệu KQL của bạn


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



