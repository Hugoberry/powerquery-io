---
title: DateTimeZone.FixedLocalNow
---

# DateTimeZone.FixedLocalNow


Trả về ngày &amp; giờ hiện tại theo múi giờ địa phương. Giá trị này được cố định và sẽ không thay đổi theo các lệnh gọi nối tiếp.


## Syntax

```powerquery
DateTimeZone.FixedLocalNow(

) as datetimezone
```


## Remarks

Trả về một giá trị <code>datetime</code> được đặt thành ngày và giờ hiện tại trên hệ thống. Giá trị trả về chứa thông tin múi giờ biểu thị múi giờ địa phương. Giá trị này được cố định và sẽ không thay đổi theo các lệnh gọi nối tiếp, chẳng hạn như DateTimeZone.LocalNow - giá trị này có thể trả về các giá trị khác nhau trong quá trình thực thi một biểu thức.



## Category
DateTimeZone
