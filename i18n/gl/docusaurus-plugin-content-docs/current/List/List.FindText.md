---
title: List.FindText
---

# List.FindText


## Description

Devolve unha lista de valores (incluíndo campos de rexistro) que conteñen o texto indicado.


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Details

Devolve unha lista de valores da lista <code>list</code> que contiñan o valor <code>text</code>.


## Examples

### Example #1 
Buscar os valores de texto na lista \{&#34;a&#34;, &#34;b&#34;, &#34;ab&#34;} que coincidan con &#34;a&#34;. 
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection
