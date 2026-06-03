---
title: DateTime.From
---

# DateTime.From


Tạo một datetime từ giá trị cho sẵn.


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Remarks

Trả về giá trị `datetime` từ `value` cho sẵn. `culture` tùy chọn cũng có thể được cung cấp (ví dụ: "en-US"). Nếu `value` cho sẵn là `null`, `DateTime.From` thì sẽ trả về `null`. Nếu `value` cho sẵn là `datetime` thì sẽ trả về `value`. Có thể chuyển đổi giá trị của các loại sau thành giá trị `datetime`:

-   `text`: Giá trị `datetime` từ dạng thức biểu diễn bằng văn bản. Tham khảo `DateTime.FromText` để biết chi tiết.
-   `date`: Giá trị `datetime` có `value` dưới dạng cấu phần ngày và `12:00:00 AM` dưới dạng cấu phần thời gian.
-   `datetimezone`: Giá trị `datetime` địa phương tương ứng với `value`.
-   `time`: Giá trị `datetime` có ngày tương ứng của Ngày tự động OLE của `0` dưới dạng cấu phần ngày và `value` dưới dạng cấu phần thời gian.
-   `number`: Giá trị `datetime` tương ứng với Ngày tự động OLE được biểu diễn bằng `value`.

Nếu `value` thuộc bất kỳ loại nào khác, thì sẽ trả về lỗi.


## Examples

### Example #1
Chuyển đổi `#time(06, 45, 12)` thành giá trị `datetime`.
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2
Chuyển đổi `#date(1975, 4, 4)` thành giá trị `datetime`.
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
