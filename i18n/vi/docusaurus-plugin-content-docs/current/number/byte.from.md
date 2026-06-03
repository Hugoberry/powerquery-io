---
title: Byte.From
---

# Byte.From


Tạo số nguyên 8 bit từ giá trị đã cho.


## Syntax

```powerquery
Byte.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Trả về giá trị `number` 8 bit từ `value` đã cho. Nếu `value` đã cho là `null`, `Byte.From` sẽ trả về `null`. Nếu `value` là một `number` trong khoảng một số nguyên 8 bit không có phần thập phân, thì `value` sẽ được trả về. Nếu số nguyên có phần thập phân, thì số sẽ được làm tròn bằng chế độ làm tròn được chỉ định. Chế độ làm tròn mặc định là `RoundingMode.ToEven`. Nếu `value` là bất kỳ loại nào khác, trước tiên, giá trị này sẽ được chuyển đổi thành `number` bằng `Number.FromText`. Tham khảo `Number.Round` để biết các chế độ làm tròn sẵn dùng. Một `culture` tùy chọn cũng có thể được cung cấp (ví dụ: "en-US").


## Examples

### Example #1
Lấy giá trị `số` nguyên 8 bit của `"4"`.
```powerquery
Byte.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Lấy giá trị `số` nguyên 8 bit của `"4,5"` bằng `RoundingMode.AwayFromZero`.
```powerquery
Byte.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
