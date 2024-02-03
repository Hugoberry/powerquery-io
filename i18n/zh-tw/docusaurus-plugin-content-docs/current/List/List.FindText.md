---
title: List.FindText
---

# List.FindText


## Description

傳回包含指定之文字的值清單 (包括記錄欄位)。


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Details

傳回清單 <code>list</code> 中包含值 <code>text</code> 的值清單。


## Examples

### Example #1 
找出清單 \{&#34;a&#34;, &#34;b&#34;, &#34;ab&#34;} 中符合 &#34;a&#34; 的文字值。
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection
