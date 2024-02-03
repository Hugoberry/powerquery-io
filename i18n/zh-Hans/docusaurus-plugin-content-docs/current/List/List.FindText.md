---
title: List.FindText
---

# List.FindText


## Description

返回包含指定文本的值(包括记录字段)列表。


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Details

从包含值 <code>text</code> 的列表 <code>list</code> 返回值列表。


## Examples

### Example #1 
在列表 \{&#34;a&#34;, &#34;b&#34;, &#34;ab&#34;} 中查找匹配 &#34;a&#34; 的文本值。
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection
