---
title: Text.Range
---

# Text.Range


Trả về chuỗi con tìm được tại phần bù.


## Syntax

```powerquery
Text.Range(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Remarks

Trả về chuỗi con từ văn bản <code>text</code> tìm được tại phần bù <code>offset</code>.    Có thể bao gồm tham số tùy chọn <code>count</code> để chỉ định số lượng ký tự sẽ trả về. Xuất hiện lỗi nếu không có đủ ký tự.


## Examples

### Example #1 
Tìm chuỗi con từ văn bản &#34;Hello World&#34; bắt đầu tại chỉ mục 6.
```powerquery
Text.Range("Hello World", 6)
```

Result: 
```powerquery
"World"
```


### Example #2 
Tìm chuỗi con từ văn bản &#34;Hello World Hello&#34; bắt đầu tại chỉ mục 6 trải dài trên 5 ký tự.
```powerquery
Text.Range("Hello World Hello", 6, 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
