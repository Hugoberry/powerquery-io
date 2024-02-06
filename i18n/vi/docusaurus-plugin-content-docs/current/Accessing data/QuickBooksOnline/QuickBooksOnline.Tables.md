---
title: QuickBooksOnline.Tables
---

# QuickBooksOnline.Tables


Nhập dữ liệu từ QuickBooks Online.


## Syntax

```powerquery
QuickBooksOnline.Tables(
    optional options as record
) as table
```


## Remarks

        Trả về một bảng liệt kê các bảng có sẵn trong QuickBooks Online. Có thể chỉ định tham số bản ghi tùy chọn, <code>options</code>, để kiểm soát các tùy chọn sau:          <ul>            <li><code>ConnectionTimeout</code>: Khoảng thời gian kiểm soát thời gian cần đợi trước khi từ bỏ nỗ lực kết nối với máy chủ. </li>            <li><code>CommandTimeout</code>: Khoảng thời gian kiểm soát thời gian truy vấn phía máy chủ được phép chạy trước khi bị hủy.</li>          </ul>        Tham số bản ghi được chỉ định là [option1 = value1, option2 = value2...].    


