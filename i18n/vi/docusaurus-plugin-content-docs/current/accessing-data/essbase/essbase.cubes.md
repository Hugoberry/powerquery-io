---
title: Essbase.Cubes
---

# Essbase.Cubes


Trả về các cube trong phiên bản Essbase được nhóm lại theo máy chủ Essbase.


## Syntax

```powerquery
Essbase.Cubes(
    url as text,
    optional options as record
) as table
```


## Remarks

Trả về một bảng cube do máy chủ Essbase nhóm từ phiên bản Essbase tại máy chủ APS `url`. Có thể chỉ định một tham số bản ghi tùy chọn `options` để kiểm soát các tùy chọn sau:

-   `CommandTimeout` : Khoảng thời gian kiểm soát thời lượng phía máy chủ được phép chạy trước khi bị hủy bỏ. Giá trị mặc định là 10 phút.



## Category
Accessing data
