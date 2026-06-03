---
title: Double.From
---

# Double.From


Tạo số có độ chính xác Đôi từ giá trị cho trước.


## Syntax

```powerquery
Double.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Trả về giá trị Gấp đôi `number` từ `value` cho sẵn. Nếu `value` cho sẵn là `null`, `Double.From` sẽ trả về `null`. Nếu `value` cho sẵn là `number` nằm trong phạm vi Gấp đôi thì sẽ trả về `value`, nếu không sẽ trả về một lỗi. Nếu `value` thuộc bất kỳ loại nào khác, trước tiên, giá trị này sẽ được chuyển đổi thành `number` bằng `Number.FromText`. Một `culture` tùy chọn cũng có thể được cung cấp (ví dụ: "en-US").


## Examples

### Example #1
Lấy giá trị `số` có độ chính xác Đôi của `"4"`.
```powerquery
Double.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
