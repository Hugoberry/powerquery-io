---
title: Text.At
---

# Text.At


Trả về ký tự tại vị trí được chỉ định.


## Syntax

```powerquery
Text.At(
    text as text,
    index as number
) as text
```


## Remarks

Trả về ký tự ở dạng giá trị văn bản <code>text</code> tại vị trí <code>index</code>. Ký tự đầu tiên trong văn bản tại vị trí 0.


## Examples

### Example #1 
Tìm ký tự tại vị trí 4 trong chuỗi &#34;Hello, World&#34;.
```powerquery
Text.At("Hello, World", 4)
```

Result: 
```powerquery
"o"
```




## Category
Text.Extraction
