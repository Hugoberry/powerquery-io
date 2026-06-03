---
title: Time.From
---

# Time.From


Tạo thời gian từ giá trị cho sẵn.


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Remarks

Trả về giá trị `time` từ `value` cho sẵn. `culture` tùy chọn cũng có thể được cung cấp (ví dụ: "en-US"). Nếu `value` cho sẵn là `null`, `Time.From` sẽ trả về `null`. Nếu `value` cho sẵn là `time` thì sẽ trả về `value`. Giá trị của các loại sau đây có thể được chuyển đổi thành giá trị `time`:

-   `text`: Giá trị `time` từ dạng thức biểu diễn bằng văn bản. Tham khảo `Time.FromText` để biết chi tiết.
-   `datetime`: Cấu phần thời gian của `value`.
-   `datetimezone`: Cấu phần thời gian của ngày giờ địa phương tương đương với `value`.
-   `number`: Giá trị `time` tương đương với số ngày ở dạng phân số hoặc phân số được biểu thị bởi `value`. Nếu `value` âm hay lớn hơn hoặc bằng 1 thì sẽ trả về một lỗi.

Nếu `value` thuộc một loại khác thì sẽ trả về một lỗi.


## Examples

### Example #1
Chuyển đổi `0.7575` thành giá trị `time`.
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2
Chuyển đổi `#datetime(1899, 12, 30, 06, 45, 12)` thành giá trị `time`.
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time
