---
title: List.FindText
---

# List.FindText


Trả về một danh sách giá trị (bao gồm các trường bản ghi) chứa văn bản được chỉ định.


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Remarks

Trả về một danh sách chứa các giá trị từ danh sách <code>list</code> đã chứa giá trị <code>text</code>.


## Examples

### Example #1 
Tìm các giá trị văn bản trong danh sách \{&#34;a&#34;, &#34;b&#34;, &#34;ab&#34;} khớp với &#34;a&#34;. 
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection
