---
title: List.FindText
---

# List.FindText


Devolve uma lista de valores (incluindo campos de registo) que contêm o texto especificado.


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Remarks

Devolve uma lista de valores da lista <code>list</code> que contêm o valor <code>text</code>.


## Examples

### Example #1 
Determinar os valores de texto existentes na lista \{&#34;a&#34;, &#34;b&#34;, &#34;ab&#34;} que correspondem a &#34;a&#34;. 
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection
