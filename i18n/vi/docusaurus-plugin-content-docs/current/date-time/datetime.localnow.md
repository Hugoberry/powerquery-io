---
title: DateTime.LocalNow
---

# DateTime.LocalNow


Trả về ngày và giờ hiện tại trong múi giờ địa phương.


## Syntax

```powerquery
DateTime.LocalNow(

) as datetime
```


## Remarks

Trả về giá trị `datetime` được đặt thành ngày và giờ hiện tại trên system.  
  
Giá trị được hàm này trả về tùy thuộc vào việc bạn đang chạy truy vấn trên máy cục bộ hay trực tuyến. Ví dụ: nếu bạn chạy truy vấn của mình trên hệ thống nằm trong múi giờ Thái Bình Dương Hoa Kỳ, Power Query Desktop sẽ trả về ngày và giờ được đặt trên máy tính cục bộ của bạn. Tuy nhiên, nếu bạn chạy truy vấn của mình trên đám mây, Power Query Online sẽ trả về thời gian UTC vì thời gian được đặt trên các máy ảo đám mây, tất cả được đặt thành UTC.


## Examples

### Example #1
Gọi hàm này trên máy cục bộ đang chạy trên Power Query để bàn.
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current local date and time.
```


### Example #2
Gọi hàm này trên đám mây đang chạy Power Query Online.
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current online (UTC) date and time.
```




## Category
DateTime
