---
title: List.FindText
---

# List.FindText


## Description

Retourneert een lijst met waarden (inclusief recordvelden) die de opgegeven tekst bevatten.


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Details

Retourneert een lijst met de waarden uit de lijst <code>list</code> die de waarde <code>text</code> bevatten.


## Examples

### Example #1 
De tekstwaarden zoeken in de lijst \{&#34;a&#34;, &#34;b&#34;, &#34;ab&#34;} die overeenkomen met &#34;a&#34;. 
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection
