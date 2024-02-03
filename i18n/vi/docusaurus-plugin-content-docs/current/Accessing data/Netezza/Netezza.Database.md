---
title: Netezza.Database
---

# Netezza.Database


## Description

Nhập dữ liệu từ cơ sở dữ liệu IBM Netezza.


## Syntax

```powerquery
Netezza.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Trả về bảng gồm các bảng Netezza, dạng xem và hàm đã lưu trữ từ cơ sở dữ liệu Máy chủ Netezza <code>cơ sở dữ liệu</code> trên máy chủ <code>máy chủ</code>. Có thể tùy ý chỉ định cổng bằng máy chủ, được phân tách bằng dấu hai chấm. Có thể chỉ định tham số bản ghi tùy chọn, <code>tùy chọn</code> để kiểm soát các tùy chọn sau:<ul>        <li><code>CreateNavigationProperties</code>: Phép lô-gic (true/false) đặt xem có tạo thuộc tính dẫn hướng trên các giá trị trả về không (mặc định là true)</li>        <li><code>HierarchicalNavigation</code>: Phép lô-gic (true/false) đặt xem có xem các bảng được nhóm theo tên sơ đồ của chúng hay không (mặc định là false)</li>        <li><code>ConnectionTimeout</code>: Khoảng thời gian kiểm soát thời gian chờ trước khi từ bỏ nỗ lực thực hiện kết nối với máy chủ. Giá trị mặc định tùy thuộc vào trình điều khiển.</li>        <li><code>CommandTimeout</code>: Khoảng thời gian kiểm soát thời gian cho phép chạy truy vấn phía máy chủ trước khi bị hủy. Giá trị mặc định tùy thuộc vào trình điều khiển. </li><li><code> NormalizeDatabaseName</code>: Một logic (true/false) đặt xem có tiêu chuẩn hóa tên cơ sở dữ liệu thành chữ viết hoa không hay diễn giải từng từ (mặc định là true). </li></ul>Tham số bản ghi được chỉ định dưới dạng [option1 = value1, option2 = value2...].


## Examples

### Example #1 
Liệt kê các bảng trong dự án trên IBM Netezza.
```powerquery
Netezza.Database("netezza:5480", "netezza_database")
```



