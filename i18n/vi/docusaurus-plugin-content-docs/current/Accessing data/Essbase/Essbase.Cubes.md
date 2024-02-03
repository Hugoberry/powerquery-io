---
title: Essbase.Cubes
---

# Essbase.Cubes


## Description

Trả về các cube trong phiên bản Essbase được nhóm lại theo máy chủ Essbase.


## Syntax

```powerquery
Essbase.Cubes(
    url as text,
    optional options as record
) as table
```


## Details

Trả về một bảng cube do máy chủ Essbase nhóm từ phiên bản Essbase tại máy chủ APS <code>url</code>. Có thể chỉ định một tham số bản ghi tùy chọn <code>options</code> để kiểm soát các tùy chọn sau:    <ul><li><code>CommandTimeout</code> : Khoảng thời gian kiểm so&#225;t thời lượng ph&#237;a m&#225;y chủ được phép chạy trước khi bị hủy bỏ. Gi&#225; trị mặc định l&#224; 10 ph&#250;t.</li></ul>



## Category
Accessing data
