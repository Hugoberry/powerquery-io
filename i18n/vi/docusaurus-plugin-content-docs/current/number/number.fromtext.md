---
title: Number.FromText
---

# Number.FromText


Tạo số từ định dạng văn bản thông thường ("15", "3,423.10", "5.0E-10").


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Remarks

Trả về giá trị `số` từ giá trị văn bản cho sẵn, `text`.

-   `text`: Biểu diễn văn bản của một giá trị số. Biểu diễn phải ở định dạng số thông thường, chẳng hạn như "15", "3,423.10" hoặc "5.0E-10".
-   `culture`: Một văn hóa tùy chọn kiểm soát cách `text` được diễn giải (ví dụ: "en-US").


## Examples

### Example #1
Nhận giá trị số của `"4"`.
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2
Nhận giá trị số của `"5.0e-10"`.
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting
