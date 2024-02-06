---
title: Access.Database
---

# Access.Database


Trả về một đại diện cấu trúc của cơ sở dữ liệu Access.


## Syntax

```powerquery
Access.Database(
    database as binary,
    optional options as record
) as table
```


## Remarks

Trả về cách biểu diễn có cấu trúc của cơ sở dữ liệu Access, <code>database</code>. Có thể chỉ định tham số bản ghi tùy chọn, <code>options</code>, để kiểm soát các tùy chọn sau:    <ul><li><code>CreateNavigationProperties</code> : Một ph&#233;p l&#244;-gic (true/false) đặt xem c&#243; tạo c&#225;c thuộc t&#237;nh điều hướng tr&#234;n gi&#225; trị trả về hay kh&#244;ng (mặc định l&#224; false).</li><li><code>NavigationPropertyNameGenerator</code> : H&#224;m được sử dụng để tạo t&#234;n cho c&#225;c thuộc t&#237;nh điều hướng.</li></ul>    Chẳng hạn, tham số bản ghi được chỉ định dưới dạng [option1 = value1, option2 = value2...].



## Category
Accessing data
