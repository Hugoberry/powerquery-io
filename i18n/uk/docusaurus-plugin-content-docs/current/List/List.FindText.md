---
title: List.FindText
---

# List.FindText


## Description

Повертає список значень (у тому числі поля запису), який містить указаний текст.


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Details

Повертає список значень зі списку <code>list</code>, який містив значення <code>text</code>.


## Examples

### Example #1 
Знайти текстові значення у списку \{&#34;a&#34;, &#34;b&#34;, &#34;ab&#34;}, які відповідають &#34;a&#34;. 
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection
