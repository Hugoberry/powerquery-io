---
title: Text.Remove
---

# Text.Remove


## Description

Loại bỏ tất cả những lần xuất hiện của giá trị hoặc danh sách ký tự cụ thể khỏi giá trị văn bản đầu vào.


## Syntax

```powerquery
Text.Remove(
    text as text,
    removeChars as any
) as text
```


## Details

Trả về một bản sao của giá trị văn bản <code>text</code> đã loại bỏ tất cả ký tự khỏi <code>removeChars</code>.  


## Examples

### Example #1 
Loại bỏ ký tự , và ; khỏi giá trị văn bản.
```powerquery
Text.Remove("a,b;c", {",",";"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
