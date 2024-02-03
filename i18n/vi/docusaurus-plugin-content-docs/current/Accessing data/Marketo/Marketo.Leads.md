---
title: Marketo.Leads
---

# Marketo.Leads


## Description

Trả về bảng có chi tiết về khách hàng tiềm năng.


## Syntax

```powerquery
Marketo.Leads(
    url as text,
    leadIds as list,
    optional options as any
) as table
```


## Details

Gọi tới điểm cuối API Marketo REST tại <code>url</code>/rest/v1/leads.json. Tất cả khách hàng tiềm năng trong danh sách kể từ khi trả về <code>leadIds</code>.


## Examples

### Example #1 
Kéo chi tiết về ba khách hàng tiềm năng
```powerquery
Marketo.Leads("https://100-AAA-999.mktorest.com/rest", {50, 2343, 88498})
```

Result: 
```powerquery
Một bảng có chi tiết về khách hàng tiềm năng đã cung cấp
```



