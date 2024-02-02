---
title: List.FindText
---

# List.FindText


## Description

Returns a list of values (including record fields) that contain the specified text.


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Details

Returns a list of the values from the list <code>list</code> which contained the value <code>text</code>.


## Examples

### Example #1 
Find the text values in the list \{&#34;a&#34;, &#34;b&#34;, &#34;ab&#34;} that match &#34;a&#34;. 
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection
