---
title: Text.Trim
---

# Text.Trim


Loại bỏ tất cả dấu cách cách quãng và kế tiếp.


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Remarks

Trả về kết quả loại bỏ tất cả dấu cách cách quãng và kế tiếp khỏi giá trị văn bản <code>text</code>.


## Examples

### Example #1 
Loại bỏ dấu cách cách quãng và kế tiếp khỏi &#34;     a b c d    &#34;.
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```




## Category
Text.Transformations
