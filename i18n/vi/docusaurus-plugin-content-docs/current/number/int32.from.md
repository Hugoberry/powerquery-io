---
title: Int32.From
---

# Int32.From


Tạo số nguyên 32 bit từ giá trị cho trước.


## Syntax

```powerquery
Int32.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Trả về giá trị `number` 32 bit từ `value` đã cho. Nếu `value` đã cho là `null`, `Int32.From` sẽ trả về `null`. Nếu `value` là `number` trong khoảng một số nguyên 32 bit không có phần thập phân, thì `value` sẽ được trả về. Nếu số nguyên có phần thập phân, thì số sẽ được làm tròn bằng chế độ làm tròn được chỉ định. Chế độ làm tròn mặc định là `RoundingMode.ToEven`. Nếu `value` là bất kỳ loại nào khác, trước tiên, giá trị này sẽ được chuyển đổi thành `number` bằng `Number.FromText`. Tham khảo `Number.Round` để biết các chế độ làm tròn sẵn dùng. Một `culture` tùy chọn cũng có thể được cung cấp (ví dụ: "en-US").


## Examples

### Example #1
Lấy giá trị `số` nguyên 32 bit của `"4"`.
```powerquery
Int32.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Lấy giá trị `số` nguyên 32 bit của `"4,5"` bằng `RoundingMode.AwayFromZero`.
```powerquery
Int32.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
