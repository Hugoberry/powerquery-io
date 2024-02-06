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

Giải mã giá trị từ biểu diễn văn bản <code>text</code> và diễn giải giá trị đó ở dạng giá trị có loại phù hợp.    <code>Value.FromText</code> lấy giá trị văn bản và trả về số, giá trị lô-gic, giá trị null, giá trị ngày giờ, giá trị khoảng thời gian hoặc giá trị văn bản. Giá trị văn bản trống được diễn giải ở dạng giá trị null.    <code>culture</code> tùy chọn cũng có thể được cung cấp (ví dụ: "en-US").



## Category
Text.Conversions from and to text
