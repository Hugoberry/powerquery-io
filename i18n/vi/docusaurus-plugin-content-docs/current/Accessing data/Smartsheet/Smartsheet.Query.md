---
title: Smartsheet.Query
---

# Smartsheet.Query


## Description

Trả về kết quả JSON từ API Smartsheet


## Syntax

```powerquery
Smartsheet.Query(
    endpoint as text,
    args as text,
    headers as record
) as any
```


## Details

Gọi đến API REST Smartsheet 2.0 tại điểm cuối được chỉ định và trả về kết quả dưới dạng bản ghi JSON.


## Examples

### Example #1 
Gọi ra dữ liệu từ điểm cuối API Smartsheet của trang tính với đối số bổ sung được chỉ định
```powerquery
Smartsheet.Content("sheets", "include=ownerInfo&includeAll=true", [])
```

Result: 
```powerquery
Bảng bao gồm thông tin trang tính được API Smartsheet trả về
```



