---
title: Marketo.Activities
---

# Marketo.Activities


## Description

Trả về bảng có các hoạt động của khách hàng tiềm năng.


## Syntax

```powerquery
Marketo.Activities(
    url as text,
    startTime as date,
    activityIds as list
) as table
```


## Details

Gọi tới điểm cuối API Marketo REST tại <code>url</code>/rest/v1/activities.json. Tất cả hoạt động trong danh sách <code>activityIds</code> đã diễn ra kể từ khi trả về <code>startTime</code>.


## Examples

### Example #1 
Kéo bảng hoạt động &#34;Truy cập Trang web&#34; kể từ ngày 1 tháng 11 năm 2015
```powerquery
Marketo.Activities("https://100-AAA-999.mktorest.com/rest", #date(2015,11,1), {1})
```

Result: 
```powerquery
Một bảng có chi tiết về tất cả hoạt động "Truy cập Trang web" kể từ ngày 1 tháng 11
```



