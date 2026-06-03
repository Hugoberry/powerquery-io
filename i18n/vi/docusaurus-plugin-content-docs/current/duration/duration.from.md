---
title: Duration.From
---

# Duration.From


Tạo một khoảng thời gian từ giá trị cho sẵn.


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Remarks

Trả về giá trị khoảng thời gian từ giá trị cho sẵn.

-   `value`: Giá trị nguồn để lấy được giá trị khoảng thời gian. Nếu giá trị cho sẵn `value` là `null`, hàm này sẽ trả về `null`. Nếu giá trị cho sẵn `value` là `duration`, giá trị trả về sẽ là `value`. Các loại giá trị sau đây có thể được chuyển đổi thành giá trị `duration`:
    -   `text`: Giá trị `duration` từ định dạng thời gian trôi qua nguyên bản (d.h:m:s). Tham khảo `Duration.FromText` để biết chi tiết.
    -   `number`: Giá trị `duration` tương đương với số ngày nguyên và phân số được biểu thị theo `value`.

Nếu `value` thuộc bất kỳ loại nào khác, hệ thống sẽ trả về lỗi.


## Examples

### Example #1
Chuyển đổi `2.525` thành giá trị `duration`.
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```


### Example #2
Chuyển đổi giá trị văn bản `"2.05:55:20.34567"` thành giá trị `duration`.
```powerquery
Duration.From("2.05:55:20.34567")
```

Result: 
```powerquery
#duration(2, 5, 55, 20.3456700)
```




## Category
Duration
