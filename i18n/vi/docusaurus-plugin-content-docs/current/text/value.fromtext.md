---
title: Value.FromText
---

# Value.FromText


Tạo một giá trị được định kiểu rõ từ một biểu diễn văn bản.


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Remarks

Giải mã một giá trị từ dạng biểu diễn văn bản và diễn giải nó dưới dạng một giá trị với kiểu dữ liệu phù hợp.

-   `text`: Văn bản cần diễn giải.
-   `culture`: (Không bắt buộc) Một nền văn hóa cụ thể dùng để diễn giải văn bản (ví dụ: "en-US").

Hàm này nhận một giá trị dạng văn bản và trả về một giá trị có kiểu dữ liệu là `number`, `logical`, `null`, `datetime`, `duration` hoặc `text`. Một giá trị văn bản trống được hiểu là giá trị `null`.


## Examples

### Example #1
Chuyển đổi văn bản đại diện cho một số sang giá trị số tương ứng.
```powerquery
Value.FromText("12345.6789")
```

Result: 
```powerquery
12345.6789
```


### Example #2
Chuyển đổi văn bản đại diện cho một tỷ lệ phần trăm sang giá trị số tương ứng.
```powerquery
Value.FromText("25.4%")
```

Result: 
```powerquery
0.254
```


### Example #3
Chuyển đổi văn bản đại diện cho giá trị Euro của Pháp sang giá trị số tương ứng.
```powerquery
Value.FromText("€1,190", "fr-FR")
```

Result: 
```powerquery
1.19
```


### Example #4
Chuyển đổi văn bản thể hiện ngày và giờ của Đức sang giá trị ngày và giờ tương ứng.
```powerquery
Value.FromText("24 Dez 2024 14:33:20", "de-DE")
```

Result: 
```powerquery
#datetime(2024, 12, 24, 14, 33, 20)
```




## Category
Text.Conversions from and to text
