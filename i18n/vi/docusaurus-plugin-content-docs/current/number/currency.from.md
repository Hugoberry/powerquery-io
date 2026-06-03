---
title: Currency.From
---

# Currency.From


Trả về giá trị tiền tệ từ giá trị đã cho.


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Trả về giá trị `currency` từ `value` đã cho. Nếu `value` đã cho là `null`, `Currency.From` sẽ trả về `null`. Nếu `value` đã cho là `number` trong phạm vi tiền tệ, phần thập phân của `value` sẽ được làm tròn tới 4 chữ số thập phân và được trả về. Nếu `value` đã cho thuộc bất kỳ loại nào khác, trước tiên, giá trị này sẽ được chuyển đổi thành `number` bằng `Number.FromText`. Khoảng hợp lệ của tiền tệ là `-922,337,203,685,477.5808` đến `922,337,203,685,477.5807`. Tham khảo `Number.Round` để biết các chế độ làm tròn sẵn dùng. Chế độ mặc định là `RoundingMode.ToEven`. Một `culture` tùy chọn cũng có thể được cung cấp (ví dụ: "en-US").


## Examples

### Example #1
Nhận giá trị `currency` của `"1.23455"`.
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2
Tải giá trị `currency` của `"1.23455"` bằng`RoundingMode.Down`.
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting
