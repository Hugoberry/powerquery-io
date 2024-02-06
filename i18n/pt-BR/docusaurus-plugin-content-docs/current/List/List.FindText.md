---
title: List.FindText
---

# List.FindText


Retorna uma lista de valores (incluindo os campos de registro) que contêm o texto especificado.


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Remarks

Retorna uma lista de valores da lista <code>list</code> que continha o valor <code>text</code>.


## Examples

### Example #1 
Localize os valores de texto da lista \{&#34;a&#34;, &#34;b&#34;, &#34;ab&#34;} que correspondam a &#34;a&#34;. 
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection
