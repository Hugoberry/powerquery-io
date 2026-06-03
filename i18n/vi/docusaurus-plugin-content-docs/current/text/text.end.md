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

Trả về giá trị `text` là các ký tự `count` cuối cùng của giá trị `text` `text`.


## Examples

### Example #1
Nhận 5 ký tự cuối cùng của văn bản "Hello, World".
```powerquery
Text.End("Hello, World", 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
