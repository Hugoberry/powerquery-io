---
title: Text.Replace
---

# Text.Replace


Thay thế tất cả những lần xuất hiện của chuỗi con cụ thể trong văn bản.


## Syntax

```powerquery
Text.Replace(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

Trả về kết quả thay thế tất cả những lần xuất hiện của giá trị văn bản <code>old</code> trong giá trị văn bản <code>text</code> bằng giá trị văn bản <code>new</code>. Hàm này phân biệt chữ hoa/chữ thường.


## Examples

### Example #1 
Thay thế mọi lần xuất hiện của &#34;the&#34; trong câu bằng &#34;a&#34;.
```powerquery
Text.Replace("the quick brown fox jumps over the lazy dog", "the", "a")
```

Result: 
```powerquery
"a quick brown fox jumps over a lazy dog"
```




## Category
Text.Modification
