---
title: Text.Select
---

# Text.Select


## Description

Chọn tất cả các lần xuất hiện của ký tự hoặc danh sách ký tự cụ thể từ giá trị văn bản đầu vào.


## Syntax

```powerquery
Text.Select(
    text as text,
    selectChars as any
) as text
```


## Details

Trả về một bản sao của giá trị văn bản <code>text</code> đã loại bỏ tất cả ký tự không nằm trong <code>selectChars</code>.  


## Examples

### Example #1 
Chọn tất cả các ký tự trong phạm vi từ &#39;a&#39; đến &#39;z&#39; từ giá trị văn bản.
```powerquery
Text.Select("a,b;c", {"a".."z"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
