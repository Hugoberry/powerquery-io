---
title: Text.Clean
---

# Text.Clean


## Description

Trả về giá trị văn bản đã loại bỏ tất cả ký tự điều khiển.


## Syntax

```powerquery
Text.Clean(
    text as text
) as text
```


## Details

Trả về giá trị văn bản đã loại bỏ tất cả ký tự điều khiển của <code>text</code>.


## Examples

### Example #1 
Loại bỏ ký tự chuyển dòng và các ký tự điều khiển khác khỏi giá trị văn bản.
```powerquery
Text.Clean("ABC#(lf)D")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
