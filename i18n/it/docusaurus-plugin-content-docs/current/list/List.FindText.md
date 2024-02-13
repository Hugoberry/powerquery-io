---
title: List.FindText
---

# List.FindText


Restituisce un elenco di valori (compresi i campi di record) contenenti il testo specificato.


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Remarks

Restituisce un elenco di valori dall'elenco <code>list</code> che contiene il valore <code>text</code>.


## Examples

### Example #1 
Trovare i valori di testo nell&#39;elenco \{&#34;a&#34;, &#34;b&#34;, &#34;ab&#34;} che corrispondono ad &#34;a&#34;. 
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection
