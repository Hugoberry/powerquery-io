---
title: Text.Middle
---

# Text.Middle


Trả về chuỗi con tới độ dài cụ thể.


## Syntax

```powerquery
Text.Middle(
    text as text,
    start as number,
    optional count as number
) as text
```


## Remarks

Trả về `count` ký tự hoặc đến cuối `text`; tại giá trị bù `start`.


## Examples

### Example #1
Tìm chuỗi con từ văn bản "Hello World" bắt đầu ở chỉ mục 6 kéo dài 5 ký tự.
```powerquery
Text.Middle("Hello World", 6, 5)
```

Result: 
```powerquery
"World"
```


### Example #2
Tìm chuỗi con từ văn bản "Hello World" bắt đầu ở chỉ mục 6 đến cuối.
```powerquery
Text.Middle("Hello World", 6, 20)
```

Result: 
```powerquery
"World"
```


### Example #3
Tìm chuỗi con từ văn bản "Hello World" bắt đầu ở chỉ mục 0 kéo dài 2 ký tự.
```powerquery
Text.Middle("Hello World", 0, 2)
```

Result: 
```powerquery
"He"
```




## Category
Text.Extraction
