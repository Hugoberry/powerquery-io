---
title: Number.From
---

# Number.From


Tạo một số từ giá trị cho sẵn.


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Trả về giá trị `number` từ `value` cho sẵn. `culture` tùy chọn cũng có thể được cung cấp (ví dụ: "en-US"). Nếu `value` cho sẵn là `null` thì `Number.From` sẽ trả về `null`. Nếu `value` cho sẵn là `number` thì sẽ trả về `value`. Giá trị của các loại sau đây có thể được chuyển đổi thành giá trị `number`:

-   `text`: Một giá trị `number` từ dạng thức biểu diễn bằng văn bản. Xử lý các định dạng văn bản thông thường ("15", "3,423.10", "5.0E-10"). Tham khảo `Number.FromText` để biết chi tiết.
-   `logical`: 1 cho `true`, 0 cho `false`.
-   `datetime`: Số dấu chấm động có độ chính xác gấp đôi chứa ngày Tự động OLE tương đương.
-   `datetimezone`: Số dấu chấm động có độ chính xác kép chứa ngày Tự động OLE tương đương với ngày và giờ địa phương là `value`.
-   `date`: Số dấu chấm động có độ chính xác kép chứa ngày Tự động OLE tương đương.
-   `time`: Được biểu thị bằng ngày có dạng phân số.
-   `duration`: Được biểu thị bằng ngày có dạng số nguyên và phân số.

Nếu `value` thuộc một loại khác thì sẽ trả về một lỗi.


## Examples

### Example #1
Nhận giá trị `number` của `"4"`.
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Nhận giá trị `number` của `#datetime(2020, 3, 20, 6, 0, 0)`.
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3
Tải giá trị `số` `"12,3%"`.
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
