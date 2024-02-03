---
title: List.FindText
---

# List.FindText


## Description

Devuelve una lista de valores (campos de registro incluidos) que contienen el texto especificado.


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Details

Devuelve una lista de valores de la lista <code>list</code> que contiene el valor <code>text</code>.


## Examples

### Example #1 
Buscar los valores de texto en la lista \{&#34;a&#34;, &#34;b&#34;, &#34;ab&#34;} que coinciden con &#34;a&#34;. 
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection
