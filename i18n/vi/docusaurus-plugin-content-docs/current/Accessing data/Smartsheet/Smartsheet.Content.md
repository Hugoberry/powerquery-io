---
title: Smartsheet.Content
---

# Smartsheet.Content


## Description

Trả về bảng bao gồm dữ liệu từ điểm cuối chỉ mục Smartsheet.


## Syntax

```powerquery
Smartsheet.Content(
    endpoint as text
) as any
```


## Details

Gọi đến API REST Smartsheet 2.0 tại điểm cuối được chỉ định và chuyển đổi phần tử dữ liệu được trả về thành bảng.


## Examples

### Example #1 
Gọi ra bảng thông tin người dùng từ API Smartsheet
```powerquery
Smartsheet.Content("users")
```

Result: 
```powerquery
Bảng chứa thông tin người dùng mà API Smartsheet trả về
```



