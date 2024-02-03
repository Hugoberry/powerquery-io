---
title: Text.Middle
---

# Text.Middle


## Description

Trả về chuỗi con tới độ dài cụ thể.


## Syntax

```powerquery
Text.Middle(
    text as text,
    start as number,
    optional count as number
) as text
```


## Details

Trả về <code>count</code> ký tự hoặc đến cuối <code>text</code>; tại giá trị bù <code>start</code>.


## Examples

### Example #1 
Tìm chuỗi con từ văn bản &#34;Hello World&#34; bắt đầu ở chỉ mục 6 kéo dài 5 ký tự.
```powerquery
Text.Middle("Hello World", 6, 5)
```

Result: 
```powerquery
"World"
```


### Example #2 
Tìm chuỗi con từ văn bản &#34;Hello World&#34; bắt đầu ở chỉ mục 6 đến cuối.
```powerquery
Text.Middle("Hello World", 6, 20)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
