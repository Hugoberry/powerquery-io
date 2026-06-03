---
title: DateTimeZone.From
---

# DateTimeZone.From


Tạo một datetimezone từ giá trị cho sẵn.


## Syntax

```powerquery
DateTimeZone.From(
    value as any,
    optional culture as text
) as datetimezone
```


## Remarks

Tạo một `datetimezone` từ giá trị đã cho.

-   `value`: Giá trị được dùng để tạo một `datetimezone`.
-   `culture`: (Không bắt buộc) Ngôn ngữ sẽ sử dụng khi chuyển đổi giá trị (ví dụ: "en-US").

Giá trị thuộc các loại sau có thể được chuyển đổi thành giá trị `datetimezone`:

-   `text`: Trả về một giá trị `datetimezone` từ biểu diễn văn bản. Hãy tham khảo `DateTimeZone.FromText` để biết chi tiết.
-   `date`: Trả về một `datetimezone` với `value` làm thành phần ngày, `12:00:00 AM` làm thành phần thời gian và phần bù tương ứng với múi giờ địa phương.
-   `datetime`: Trả về một `datetimezone` với `value` làm ngày giờ và phần bù tương ứng với múi giờ địa phương.
-   `datetimezone`: Trả về `value`.
-   `time`: Trả về một `datetimezone` với ngày tương đương của Ngày tự động OLE là `0` làm thành phần ngày, `value` làm thành phần thời gian và phần bù tương ứng với múi giờ địa phương. Ngày tự động OLE bao gồm số dấu phẩy động có thành phần tích phân là số ngày trước hoặc sau nửa đêm, ngày 30 tháng 12 năm 1899 và có thành phần phân số biểu diễn thời gian trong ngày đó chia cho 24. Ví dụ: nửa đêm, ngày 31 tháng 12 năm 1899 được biểu diễn bằng 1,0; 6 giờ sáng, ngày 1 tháng 1 năm 1900 được biểu diễn bằng 2,25; nửa đêm, ngày 29 tháng 12 năm 1899 được biểu diễn bằng -1,0; và 6 giờ sáng, ngày 29 tháng 12 năm 1899 được biểu diễn bằng -1,25. Giá trị cơ sở là nửa đêm, ngày 30 tháng 12 năm 1899. Giá trị tối thiểu là nửa đêm, ngày 1 tháng 1 năm 0100. Giá trị tối đa là thời điểm cuối cùng của ngày 31 tháng 12 năm 9999.
-   `number`: Trả về một `datetimezone` với ngày giờ tương đương của Ngày tự động OLE được biểu thị bằng `value` và phần bù tương ứng với múi giờ địa phương.
-   `null`: Trả về `null`.

Nếu `value` thuộc bất kỳ loại nào khác, hệ thống sẽ trả về lỗi.  
  
Giá trị của phần bù tương ứng với múi giờ địa phương sẽ khác nhau giữa chạy hàm này trên máy và chạy trực tuyến. Khi chạy trên máy, múi giờ địa phương được trả về. Khi chạy trực tuyến, múi giờ UTC (+00:00) được trả về.


## Examples

### Example #1
Chuyển đổi biểu diễn văn bản của ngày, giờ và múi giờ thành giá trị `datetimezone`.
```powerquery
DateTimeZone.From("2020-10-30T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2020, 10, 30, 01, 30, 00, -8, 00)
```


### Example #2
Chuyển đổi biểu diễn văn bản của ngày, giờ và múi giờ tiếng Bồ Đào Nha (Brazil) thành giá trị `datetimezone`.
```powerquery
DateTimeZone.From("13 de agosto de 2025 15:43:00 -03:00", "pt-BR")
```

Result: 
```powerquery
#datetimezone(2025, 08, 13, 15, 43, 00, -3, 00)
```


### Example #3
Chuyển đổi một số biểu thị ngày 1 tháng 1 năm 2025 lúc 12:00 trưa thành giá trị `datetimezone`. Múi giờ trong kết quả phụ thuộc vào việc ví dụ được chạy trên máy hay trực tuyến.
```powerquery
DateTimeZone.From(45658.5)
```

Result: 
```powerquery
#datetimezone(2025, 01, 01, 12, 00, 00, 0, 00)
```




## Category
DateTimeZone
