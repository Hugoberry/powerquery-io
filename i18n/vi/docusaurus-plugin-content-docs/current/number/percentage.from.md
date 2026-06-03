---
title: Percentage.From
---

# Percentage.From


Trả về giá trị phần trăm từ giá trị đã cho.


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Trả về giá trị `percentage` từ `value` cho sẵn. Nếu `value` cho sẵn là `null`, `Percentage.From` sẽ trả về `null`. Nếu `value` cho sẵn là `text` có biểu tượng dấu phần trăm theo sau, thì sẽ trả về số thập phân được chuyển đổi. Nếu không, giá trị sẽ được chuyển đổi thành `number` bằng `Number.From`. Một `culture` tùy chọn cũng có thể được cung cấp (ví dụ: "en-US").


## Examples

### Example #1
Tải giá trị `phần trăm` `"12,3%"`.
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
