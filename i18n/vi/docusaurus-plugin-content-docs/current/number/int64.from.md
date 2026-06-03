---
title: Int64.From
---

# Int64.From


Tạo số nguyên 64 bit từ giá trị cho trước.


## Syntax

```powerquery
Int64.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Trả về giá trị `number` 64 bit từ `value` đã cho. Nếu `value` đã cho là `null`, `Int64.From` sẽ trả về `null`. Nếu `value` là `number` trong khoảng một số nguyên 64 bit không có phần thập phân, thì `value` sẽ được trả về. Nếu số nguyên có phần thập phân, thì số sẽ được làm tròn bằng chế độ làm tròn được chỉ định. Chế độ làm tròn mặc định là `RoundingMode.ToEven`. Nếu `value` là bất kỳ loại nào khác, trước tiên, giá trị này sẽ được chuyển đổi thành `number` bằng `Number.FromText`. Tham khảo `Number.Round` để biết các chế độ làm tròn sẵn dùng. Một `culture` tùy chọn cũng có thể được cung cấp (ví dụ: "en-US").


## Examples

### Example #1
Nhận giá trị `số` nguyên 64 bit là `"4"`.
```powerquery
Int64.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Tải giá trị số nguyên 64 bit `number` là `"4.5"` bằng `RoundingMode.AwayFromZero`.
```powerquery
Int64.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
