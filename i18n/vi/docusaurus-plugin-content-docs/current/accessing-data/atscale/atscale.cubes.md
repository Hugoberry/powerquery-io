---
title: AtScale.Cubes
---

# AtScale.Cubes


Nhập/Truy vấn trực tiếp dữ liệu khối từ AtScale.


## Syntax

```powerquery
AtScale.Cubes(
    server as Uri.Type,
    optional options as record
) as table
```


## Remarks

Trả về dữ liệu khối từ AtScale trên máy chủ `máy chủ`. Một tham số bản ghi tùy chọn, `tùy chọn`, có thể được chỉ định để kiểm soát các tùy chọn sau:

-   `TypedMeasureColumns` : Một giá trị lô-gic cho biết loại được chỉ định trong mô hình đa chiều hoặc dạng bảng sẽ được dùng cho loại của cột đo được thêm. Khi đặt thành giả, loại "số" sẽ được dùng cho tất cả các cột đo. Giá trị mặc định cho tùy chọn này là giả.
-   `CommandTimeout`: Một khoảng thời gian (tính bằng giây) kiểm soát thời gian truy vấn phía máy chủ được cho phép để chạy trước khi bị hủy. Giá trị mặc định tùy thuộc vào trình điều khiển.
-   `ConnectionTimeout`: Một khoảng thời gian (tính bằng giây) kiểm soát thời gian chờ trước khi dừng kết nối tới máy chủ. Giá trị mặc định tùy thuộc vào trình điều khiển.

Tham số bản ghi được chỉ định là \[option1 = value1, option2 = value2...\].


## Examples

### Example #1
Danh sách dữ liệu khối trong khối AtScale.
```powerquery
AtScale.Cubes("https://contoso.atscale.com:10502/xmla/...")
```



