---
title: Text.ReplaceRange
---

# Text.ReplaceRange


Loại bỏ một dãy ký tự và chèn một giá trị mới tại vị trí được chỉ định.


## Syntax

```powerquery
Text.ReplaceRange(
    text as text,
    offset as number,
    count as number,
    newText as text
) as text
```


## Remarks

Trả về kết quả loại bỏ một số ký tự, `count`, khỏi giá trị văn bản `text` bắt đầu tại vị trí `offset` rồi chèn giá trị văn bản `newText` tại cùng vị trí vào `text`.


## Examples

### Example #1
Thay thế một ký tự đơn lẻ tại vị trí 2 trong giá trị văn bản "ABGF" bằng giá trị văn bản mới "CDE".
```powerquery
Text.ReplaceRange("ABGF", 2, 1, "CDE")
```

Result: 
```powerquery
"ABCDEF"
```




## Category
Text.Modification
