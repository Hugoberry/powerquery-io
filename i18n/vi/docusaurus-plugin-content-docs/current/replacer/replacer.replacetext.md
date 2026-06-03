---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


Thay thế văn bản trong đầu vào được cung cấp.


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

Thay thế văn bản `old` trong `text` gốc bằng văn bản `new`. Có thể sử dụng hàm thay thế này trong `List.ReplaceValue` và `Table.ReplaceValue`.


## Examples

### Example #1
Thay thế văn bản "hE" bằng "He" trong chuỗi "hEllo world".
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
