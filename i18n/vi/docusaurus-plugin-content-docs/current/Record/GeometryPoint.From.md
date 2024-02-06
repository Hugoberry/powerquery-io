---
title: GeometryPoint.From
---

# GeometryPoint.From


Tạo bản ghi biểu thị một điểm hình học từ các phần.


## Syntax

```powerquery
GeometryPoint.From(
    x as number,
    y as number,
    optional z as number,
    optional m as number,
    optional srid as number
) as record
```


## Remarks

Tạo bản ghi biểu thị một điểm địa lý từ các phần cấu thành, như tọa độ X, tọa độ Y và nếu có thì cả toạ độ Z và số đo (M). Có thể cung cấp mã định danh tham chiếu không gian (SRID) tùy chọn nếu mã này khác với giá trị mặc định (0).



## Category
Record.Serialization
