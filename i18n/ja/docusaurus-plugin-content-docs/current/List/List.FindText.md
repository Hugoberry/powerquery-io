---
title: List.FindText
---

# List.FindText


## Description

指定されたテキストを含む (レコード フィールドを含む) 値のリストを返します。


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Details

リスト <code>list</code> から、値 <code>text</code> が含まれる値のリストを返します。


## Examples

### Example #1 
リスト \{&#34;a&#34;, &#34;b&#34;, &#34;ab&#34;} 内の、&#34;a&#34; に一致するテキスト値を求めます。
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection
