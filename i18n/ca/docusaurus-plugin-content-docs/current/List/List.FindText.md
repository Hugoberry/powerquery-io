---
title: List.FindText
---

# List.FindText


## Description

Retorna una llista de valors (inclosos els camps de registres) que conté el text especificat.


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Details

Retorna una llista de valors de la llista <code>list</code> que contenia el valor <code>text</code>.


## Examples

### Example #1 
Troba els valors de text de la llista \{&#34;a&#34;, &#34;b&#34;, &#34;ab&#34;} que coincideixen amb &#34;a&#34;. 
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection
