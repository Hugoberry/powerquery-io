---
title: Vertica.Database
---

# Vertica.Database


Nhập dữ liệu từ Vertica


## Syntax

```powerquery
Vertica.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Trả về bảng bao gồm các sơ đồ có trên máy chủ được đặt tên theo tham số <code>máy chủ</code> trong cơ sở dữ liệu được đặt tên theo tham số <code>cơ sở dữ liệu</code>.Có thể cung cấp tham số bản ghi tùy chọn, <code>tùy chọn</code>, để chỉ định các thuộc tính bổ sung. Bản ghi có thể bao gồm các trường sau:<ul>    <li><code>ConnectionTimeout</code>: Khoảng thời gian kiểm soát thời gian chờ trước khi từ bỏ nỗ lực kết nối với máy chủ. Giá trị mặc định phụ thuộc vào trình điều khiển.</li>    <li><code>CommandTimeout </code>: Khoảng thời gian kiểm soát thời gian cho phép chạy truy vấn phía máy chủ trước khi truy vấn đó bị hủy. Giá trị mặc định phụ thuộc vào trình điều khiển.</li></ul>


## Examples

### Example #1 
Liệt kê các bảng trong Vertica
```powerquery

```



