---
title: Decimal.From
---

# Decimal.From


Tạo số Thập phân từ giá trị cho trước.


## Syntax

```powerquery
Decimal.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Trả về giá trị `number` Thập phân từ `value` cho sẵn. Nếu `value` cho sẵn là `null`, `Decimal.From` sẽ trả về `null`. Nếu `value` cho sẵn là `number` nằm trong phạm vi Thập phân thì sẽ trả về `value`, nếu không sẽ trả về một lỗi. Nếu `value` thuộc bất kỳ loại nào khác, trước tiên, giá trị này sẽ được chuyển đổi thành `number` bằng `Number.FromText`. Một `culture` tùy chọn cũng có thể được cung cấp (ví dụ: "en-US").


## Examples

### Example #1
Lấy giá trị `số` Thập phân của `"4,5"`.
```powerquery
Decimal.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
