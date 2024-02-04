---
title: List.FindText
---

# List.FindText


## Description

Gibt eine Liste mit Werten (einschließlich Datensatzfelder) zurück, die den angegebenen Text enthalten.


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Details

Gibt eine Liste mit den Werten aus der Liste "<code>list</code>" zurück, die den Wert "<code>text</code>" enthalten.


## Examples

### Example #1 
Ermittelt die Textwerte in der Liste &#34;\{&#34;a&#34;, &#34;b&#34;, &#34;ab&#34;}&#34;, die den Wert &#34;a&#34; enthalten. 
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection
