---
title: GeographyPoint.From
---

# GeographyPoint.From


Tạo bản ghi biểu thị một điểm địa lý từ các phần.


## Syntax

```powerquery
GeographyPoint.From(
    longitude as number,
    latitude as number,
    optional z as number,
    optional m as number,
    optional srid as number
) as record
```


## Remarks

Tạo bản ghi biểu thị một điểm địa lý từ các phần cấu thành, như kinh độ, vĩ độ và nếu có thì cả độ cao (Z) và số đo (M). Có thể cung cấp mã định danh tham chiếu không gian (SRID) tùy chọn nếu mã này khác với giá trị mặc định (4326).



## Category
Record.Serialization
