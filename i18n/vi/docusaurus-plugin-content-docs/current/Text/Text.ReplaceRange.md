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

Trả về kết quả loại bỏ một số ký tự, <code>count</code>, khỏi giá trị văn bản <code>text</code> bắt đầu tại vị trí <code>offset</code> rồi chèn giá trị văn bản <code>newText</code> tại cùng vị trí vào <code>text</code>.


## Examples

### Example #1 
Thay thế một ký tự đơn lẻ tại vị trí 2 trong giá trị văn bản &#34;ABGF&#34; bằng giá trị văn bản mới &#34;CDE&#34;.
```powerquery
Text.ReplaceRange("ABGF", 2, 1, "CDE")
```

Result: 
```powerquery
"ABCDEF"
```




## Category
Text.Modification
