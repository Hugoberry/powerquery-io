---
title: Text.TrimEnd
---

# Text.TrimEnd


## Description

Loại bỏ tất cả dấu cách kế tiếp.


## Syntax

```powerquery
Text.TrimEnd(
    text as text,
    optional trim as any
) as text
```


## Details

Trả về kết quả loại bỏ tất cả dấu cách kế tiếp từ giá trị văn bản <code>text</code>.


## Examples

### Example #1 
Loại bỏ dấu cách kế tiếp khỏi &#34;     a b c d    &#34;.
```powerquery
Text.TrimEnd("     a b c d    ")
```

Result: 
```powerquery
"     a b c d"
```




## Category
Text.Transformations
