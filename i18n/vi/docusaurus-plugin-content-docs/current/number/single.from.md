---
title: Single.From
---

# Single.From


Tạo số có độ chính xác Đơn từ giá trị cho trước.


## Syntax

```powerquery
Single.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Trả về giá trị `number` Đơn từ `value` cho sẵn. Nếu `value` cho sẵn là `null`, `Single.From` sẽ trả về `null`. Nếu `value` cho sẵn là `number` nằm trong phạm vi Đơn thì sẽ trả về `value`, nếu không sẽ trả về một lỗi. Nếu `value` thuộc bất kỳ loại nào khác, trước tiên, giá trị này sẽ được chuyển đổi thành `number` bằng `Number.FromText`. Một `culture` tùy chọn cũng có thể được cung cấp (ví dụ: "en-US").


## Examples

### Example #1
Lấy giá trị `số` có độ chính xác Đơn của `"1,5"`.
```powerquery
Single.From("1.5")
```

Result: 
```powerquery
1.5
```




## Category
Number.Conversion and formatting
