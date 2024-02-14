---
title: Text.TrimStart
---

# Text.TrimStart


Loại bỏ tất cả dấu cách cách quãng.


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Remarks

Trả về kết quả loại bỏ tất cả dấu cách cách quãng khỏi giá trị văn bản <code>text</code>.


## Examples

### Example #1 
Loại bỏ dấu cách cách quãng khỏi &#34;     a b c d    &#34;.
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```




## Category
Text.Transformations
