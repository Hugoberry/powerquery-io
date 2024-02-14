---
title: Text.End
---

# Text.End


Trả về các ký tự cuối cùng của văn bản.


## Syntax

```powerquery
Text.End(
    text as text,
    count as number
) as text
```


## Remarks

Trả về giá trị <code>text</code> là các ký tự <code>count</code> cuối cùng của giá trị <code>text</code> <code>text</code>.


## Examples

### Example #1 
Nhận 5 ký tự cuối cùng của văn bản &#34;Hello, World&#34;.
```powerquery
Text.End("Hello, World", 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
