---
title: Text.Start
---

# Text.Start


## Description

Trả về phần đầu văn bản.


## Syntax

```powerquery
Text.Start(
    text as text,
    count as number
) as text
```


## Details

Trả về <code>count</code> ký tự đầu tiên của <code>text</code> ở dạng giá trị văn bản.


## Examples

### Example #1 
Nhận 5 ký tự đầu tiên của văn bản &#34;Hello, World&#34;.
```powerquery
Text.Start("Hello, World", 5)
```

Result: 
```powerquery
"Hello"
```




## Category
Text.Extraction
